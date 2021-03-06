---
layout: docs
title: Upgrade IceHrm Pro
prev_section: upgrade
next_section: faq
permalink: /docs/upgrade-pro/
---
### Upgrading IceHrm Pro from v23.0.0.PRO or Above

1. First backup IceHrm Installation folder and database.

2. Then delete all folders/files inside icehrm installation path except "app" folder

3. Extract latest icehrm pro zip file and copy all folders into icehrm installation path except "app" folder

4. Copy icehrm-release/app/icehrm.key into icehrm/app directory

### Upgrading IceHrm Pro to v23.0.0.PRO from any version 

1. First backup IceHrm Installation folder and database.

2. Then delete all folders/files inside icehrm installation path except "app" folder

3. Extract latest icehrm pro zip file and copy all folders into icehrm installation path except "app" folder

4. Copy icehrm-release/app/icehrm.key into icehrm/app directory

#### Update your IceHrm Config File for v23.0.0.PRO

- Open icehrm/app/config.php in a text editor

- Assuming icehrm is installed on **/var/www/icehrm/** It should look like bellow

```
ini_set('error_log', 'data/icehrm.log');

define('CLIENT_NAME', 'app');
define('APP_BASE_PATH', '/var/www/icehrm/');
define('CLIENT_BASE_PATH', '/var/www/icehrm/app/');
define('BASE_URL','http://my-company-url.com/hrm/');
define('CLIENT_BASE_URL','http://my-company-url.com/hrm/app/');

define('APP_DB', 'dev');
define('APP_USERNAME', 'dev');
define('APP_PASSWORD', 'dev');
define('APP_HOST', 'localhost');
define('APP_CON_STR', 'mysqli://'.APP_USERNAME.':'.APP_PASSWORD.'@'.APP_HOST.'/'.APP_DB);

//file upload
define('FILE_TYPES', 'jpg,png,jpeg');
define('MAX_FILE_SIZE_KB', 10 * 1024);

```

- Add ``` core/ ``` to the end of ``` APP_BASE_PATH ```
- Add ``` web/ ``` to the end of ``` BASE_URL ```

- After this change your configuration your **config.php** should look like this:

```
ini_set('error_log', 'data/icehrm.log');

define('CLIENT_NAME', 'app');
define('APP_BASE_PATH', '/var/www/icehrm/core/');
define('CLIENT_BASE_PATH', '/var/www/icehrm/app/');
define('BASE_URL','http://my-company-url.com/hrm/web/');
define('CLIENT_BASE_URL','http://my-company-url.com/hrm/app/');

define('APP_DB', 'dev');
define('APP_USERNAME', 'dev');
define('APP_PASSWORD', 'dev');
define('APP_HOST', 'localhost');
define('APP_CON_STR', 'mysqli://'.APP_USERNAME.':'.APP_PASSWORD.'@'.APP_HOST.'/'.APP_DB);

//file upload
define('FILE_TYPES', 'jpg,png,jpeg');
define('MAX_FILE_SIZE_KB', 10 * 1024);

```