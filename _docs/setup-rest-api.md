---
layout: docs
title: Setup Rest Api
prev_section: dev-env
next_section: home
permalink: /docs/contribute/
---

## Setup IceHrm REST Api

IceHrm includes a REST api but it needs to be configured via web server configurations.

Basically all the requests coming to icehrm.url/app/api/ should be redirected to icehrm.url/app/rest.php

For an example ff you are using Nginx web server you need to add following location block inside your sever block
in Nginx config file for your site

 
```
location /app/api/ {
    try_files $uri $uri/ /app/rest.php?/$uri&$args;
}
```