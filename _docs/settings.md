---
layout: docs
title: Settings
prev_section: installation
next_section: collections
permalink: /docs/settings/
---

After installation the settings module can be accessed by login in as admin and going to System->Settings

## Global Settings

<div class="mobile-side-scroller">
<table>
  <thead>
    <tr>
      <th>Setting</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><p><code>Company: Name</code></p></td>
      <td><p>
        Name of the company

      </p></td>
    </tr>
    <tr>
      <td><p><code>Company: Logo</code></p></td>
      <td><p>

        Company logo. You may upload the company logo here.
        Ideally should be 200px wide and height between 50px to 150 px.

      </p></td>
    </tr>
    <tr>
      <td><p><code>Company: Description</code></p></td>
      <td><p>

        A short description about the company. Will be used mainly in recruitment module

      </p></td>
    </tr>
    <tr>
          <td><p><code>Email: Enable</code></p></td>
          <td><p>
    
            Set this to “No” to disable all outgoing emails from modules. Value “Yes” will enable outgoing emails
    
          </p></td>
        </tr>
  </tbody>
</table>
</div>

## Email Settings

### Configuring Email with SMTP

<div class="mobile-side-scroller">
<table>
  <thead>
    <tr>
      <th>Setting</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><p><code>Email: Mode</code></p></td>
      <td><p>

        This should be set to SMTP

      </p></td>
    </tr>
    <tr>
      <td><p><code>Email: SMTP Host</code></p></td>
      <td><p>

        If you are using local machine to send emails, set this to localhost. If not set the IP address of the server you are using to send emails

      </p></td>
    </tr>
    <tr>
      <td><p><code>Email: SMTP Authentication</code></p></td>
      <td><p>

        Set this to "Yes" if SMTP server authorization is enabled

      </p></td>
    </tr>
    <tr>
      <td><p><code>Email: SMTP User</code></p></td>
      <td><p>

        User name of the SMTP user

      </p></td>
    </tr>
    <tr>
      <td><p><code>Email: SMTP Password</code></p></td>
      <td><p>

        SMTP user password

      </p></td>
    </tr>
    <tr>
      <td><p><code>Email: SMTP Port</code></p></td>
      <td><p>

        Port configured in SMTP server (Default 25)

      </p></td>
    </tr>
    <tr>
      <td><p><code>Email: Email From</code></p></td>
      <td><p>

        From email address (e.g icehrm@mydomain.com)

      </p></td>
    </tr>
  </tbody>
</table>
</div>

## Page Variables

<div class="mobile-side-scroller">
<table>
  <thead>
    <tr>
      <th>Variable</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><p><code>page.content</code></p></td>
      <td><p>

        The content of the Page, rendered or un-rendered depending upon
        what Liquid is being processed and what <code>page</code> is.

      </p></td>
    </tr>
    <tr>
      <td><p><code>page.title</code></p></td>
      <td><p>

        The title of the Page.

      </p></td>
    </tr>
    <tr>
      <td><p><code>page.excerpt</code></p></td>
      <td><p>

        The un-rendered excerpt of the Page.

      </p></td>
    </tr>
    <tr>
      <td><p><code>page.url</code></p></td>
      <td><p>

        The URL of the Post without the domain, but
        with a leading slash, e.g.
        <code>/2008/12/14/my-post.html</code>

      </p></td>
    </tr>
    <tr>
      <td><p><code>page.date</code></p></td>
      <td><p>

        The Date assigned to the Post. This can be overridden in a Post’s front
        matter by specifying a new date/time in the format
        <code>YYYY-MM-DD HH:MM:SS</code> (assuming UTC), or
        <code>YYYY-MM-DD HH:MM:SS +/-TTTT</code> (to specify a time zone using
        an offset from UTC. e.g. <code>2008-12-14 10:30:00 +0900</code>).

      </p></td>
    </tr>
    <tr>
      <td><p><code>page.id</code></p></td>
      <td><p>

        An identifier unique to the Post (useful in RSS feeds). e.g.
        <code>/2008/12/14/my-post</code>

      </p></td>
    </tr>
    <tr>
      <td><p><code>page.categories</code></p></td>
      <td><p>

        The list of categories to which this post belongs. Categories are
        derived from the directory structure above the <code>_posts</code>
        directory. For example, a post at
        <code>/work/code/_posts/2008-12-24-closures.md</code> would have this
        field set to <code>['work', 'code']</code>. These can also be specified
        in the <a href="../frontmatter/">YAML Front Matter</a>.

      </p></td>
    </tr>
    <tr>
      <td><p><code>page.tags</code></p></td>
      <td><p>

        The list of tags to which this post belongs. These can be specified in
        the <a href="../frontmatter/">YAML Front Matter</a>.

      </p></td>
    </tr>
    <tr>
      <td><p><code>page.path</code></p></td>
      <td><p>

        The path to the raw post or page. Example usage: Linking back to the
        page or post’s source on GitHub. This can be overridden in the
        <a href="../frontmatter/">YAML Front Matter</a>.

      </p></td>
    </tr>
    <tr>
      <td><p><code>page.next</code></p></td>
      <td><p>

        The next post relative to the position of the current post in
        <code>site.posts</code>. Returns <code>nil</code> for the last entry.

      </p></td>
    </tr>
    <tr>
      <td><p><code>page.previous</code></p></td>
      <td><p>

        The previous post relative to the position of the current post in
        <code>site.posts</code>. Returns <code>nil</code> for the first entry.

      </p></td>
    </tr>
  </tbody>
</table>
</div>

<div class="note">
  <h5>ProTip™: Use Custom Front Matter</h5>
  <p>

    Any custom front matter that you specify will be available under
    <code>page</code>. For example, if you specify <code>custom_css: true</code>
    in a page’s front matter, that value will be available as
    <code>page.custom_css</code>.

  </p>
</div>

## Paginator

<div class="mobile-side-scroller">
<table>
  <thead>
    <tr>
      <th>Variable</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><p><code>paginator.per_page</code></p></td>
      <td><p>Number of Posts per page.</p></td>
    </tr>
    <tr>
      <td><p><code>paginator.posts</code></p></td>
      <td><p>Posts available for that page.</p></td>
    </tr>
    <tr>
      <td><p><code>paginator.total_posts</code></p></td>
      <td><p>Total number of Posts.</p></td>
    </tr>
    <tr>
      <td><p><code>paginator.total_pages</code></p></td>
      <td><p>Total number of Pages.</p></td>
    </tr>
    <tr>
      <td><p><code>paginator.page</code></p></td>
      <td><p>The number of the current page.</p></td>
    </tr>
    <tr>
      <td><p><code>paginator.previous_page</code></p></td>
      <td><p>The number of the previous page.</p></td>
    </tr>
    <tr>
      <td><p><code>paginator.previous_page_path</code></p></td>
      <td><p>The path to the previous page.</p></td>
    </tr>
    <tr>
      <td><p><code>paginator.next_page</code></p></td>
      <td><p>The number of the next page.</p></td>
    </tr>
    <tr>
      <td><p><code>paginator.next_page_path</code></p></td>
      <td><p>The path to the next page.</p></td>
    </tr>
  </tbody>
</table>
</div>

<div class="note info">
  <h5>Paginator variable availability</h5>
  <p>

    These are only available in index files, however they can be located in a
    subdirectory, such as <code>/blog/index.html</code>.

  </p>
</div>
