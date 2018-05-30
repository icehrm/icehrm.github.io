---
layout: docs
title: Setup Rest Api
prev_section: dev-env
next_section: home
permalink: /docs/setup-rest-api/
---

## Setup IceHrm REST Api - Nginx

IceHrm includes a REST api but it needs to be configured via web server configurations.

Basically all the requests coming to icehrm.url/app/api/ should be redirected to icehrm.url/app/index.php

For an example if you are using Nginx web server you need to add following location block inside your sever block
in Nginx config file for your site
 
```
location /app/api/ {
    try_files $uri /app/api/index.php?/$uri&$args;
}
```

If IceHrm is not loaded from web root, for an example if your icehrm url is ```icehrm.yourwebserver.com/icehrm``` instead of
```icehrm.yourwebserver.com``` you should add any directory in relative path to location block as in following example

```
location /icehrm/app/api/ {
    try_files $uri /icehrm/app/api/index.php?/$uri&$args;
}
```

