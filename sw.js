/**
 * Service worker: forwards every request under /scope-<id>/ to the PHP worker of
 * the tab that owns that scope (over a BroadcastChannel) and returns PHP's response.
 * Everything else (the page itself, PHP runtime files, the bundle) goes to the network.
 */
const channel = new BroadcastChannel('icehrm-php');
const pending = new Map();
let nextId = 1;
const TIMEOUT_MS = 120000;

channel.onmessage = (event) => {
  const message = event.data;
  if (message?.type !== 'response') return;
  const waiter = pending.get(message.id);
  if (!waiter) return;
  pending.delete(message.id);
  waiter(message);
};

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));

const SCOPED = /^\/(scope-[a-z0-9]+)(\/.*)?$/;

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  const match = url.pathname.match(SCOPED);
  if (!match) return;
  event.respondWith(forward(event, match[1], url));
});

async function forward(event, scope, url) {
  const request = event.request;
  const headers = {};
  request.headers.forEach((value, key) => {
    headers[key] = value;
  });
  const hasBody = !['GET', 'HEAD'].includes(request.method);

  // The browser adds Origin and Referer only when a request goes to the network, so
  // request.headers never has them here. IceHrm refuses saves and deletes without
  // one (its CSRF check), so pass on what the browser would have sent.
  if (request.referrer.startsWith('http')) headers.referer = request.referrer;
  if (hasBody && event.clientId) {
    const client = await self.clients.get(event.clientId);
    if (client) headers.origin = new URL(client.url).origin;
  }

  const body = hasBody ? await request.arrayBuffer() : null;
  const id = nextId++;

  const reply = new Promise((resolve) => {
    pending.set(id, resolve);
    setTimeout(() => {
      if (pending.delete(id)) {
        resolve({
          status: 504,
          headers: { 'content-type': ['text/plain; charset=utf-8'] },
          body: new TextEncoder().encode('IceHrm did not respond. Reload the page to start a new session.').buffer,
        });
      }
    }, TIMEOUT_MS);
  });

  channel.postMessage({
    type: 'request',
    id,
    scope,
    method: request.method,
    url: url.pathname + url.search,
    headers,
    body,
  });

  const message = await reply;
  const responseHeaders = new Headers();
  for (const [key, values] of Object.entries(message.headers || {})) {
    // Cookies are kept by PHP's own cookie store in the worker.
    if (key.toLowerCase() === 'set-cookie') continue;
    for (const value of [].concat(values)) responseHeaders.append(key, value);
  }
  const status = message.status || 200;
  const nullBody = [101, 204, 205, 304].includes(status) || request.method === 'HEAD';
  return new Response(nullBody ? null : message.body, { status, headers: responseHeaders });
}
