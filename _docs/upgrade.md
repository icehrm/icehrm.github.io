---
layout: docs
title: Upgrade Guide
prev_section: installation
next_section: upgrade-pro
permalink: /docs/upgrade/
---

### Upgrading from IceHrm Open Source Edition to IceHrm Pro latest version

After purchasing IceHrm Pro depending on your current open source version upgrade process will be different.

1. First backup IceHrm Installation folder and database.

2. If you are on v13.X.OS execute following scripts on your database in given order. (DB scripts can be found inside icehrm/scripts folder of icehrm_v16.0.PRO.zip)
 - upgrade_v13.3.OS_to_v14.0.OS.sql
 - upgrade_v14.0.OS_to_v15.0.OS.sql
 - upgrade_v15.0.OS_to_v15.2.OS.sql
 - upgrade_v15.2.OS_to_v16.0.OS.sql
 - upgrade_v16.0.OS_to_v16.0.PRO.sql
 - upgrade_v16.x.PRO_v17.0.PRO.sql
 
3. If you are on v14.X.OS execute following scripts on your database in given order (DB scripts can be found inside icehrm/scripts folder of icehrm_v16.0.PRO.zip)
 - upgrade_v14.0.OS_to_v15.0.OS.sql
 - upgrade_v15.0.OS_to_v15.2.OS.sql
 - upgrade_v15.2.OS_to_v16.0.OS.sql
 - upgrade_v16.0.OS_to_v16.0.PRO.sql
 - upgrade_v16.x.PRO_v17.0.PRO.sql
 
4. If you are on v15.0.OS execute following scripts on your database in given order (DB scripts can be found inside icehrm/scripts folder of icehrm_v16.0.PRO.zip)
 - upgrade_v15.0.OS_to_v15.2.OS.sql
 - upgrade_v15.2.OS_to_v16.0.OS.sql
 - upgrade_v16.0.OS_to_v16.0.PRO.sql
 - upgrade_v16.x.PRO_v17.0.PRO.sql
 
5. If you are on v15.2.OS execute following scripts on your database in given order (DB scripts can be found inside icehrm/scripts folder of icehrm_v16.0.PRO.zip)
 - upgrade_v15.2.OS_to_v16.0.OS.sql
 - upgrade_v16.0.OS_to_v16.0.PRO.sql
 - upgrade_v16.x.PRO_v17.0.PRO.sql

6. If you are on v16.0.OS execute following scripts on your database in given order (DB scripts can be found inside icehrm/scripts folder of icehrm_v16.0.PRO.zip)
 - upgrade_v16.0.OS_to_v16.0.PRO.sql
 - upgrade_v16.x.PRO_v17.0.PRO.sql
 
7. Then delete all folders inside icehrm installation path except "app" folder

8. Exteact icehrm_v16.1.PRO.zip and copy all folders into icehrm installation path except "app" folder

9. Copy icehrm.key from the app folder in IceHrm pro downloaded zip file to to the 'app' folder of your installation






### Upgrading from IceHrm Open Source Edition to IceHrm latest version

Download icehrm_v16.0.OS from [https://github.com/gamonoid/icehrm/releases/latest](https://github.com/gamonoid/icehrm/releases/latest)

1. First backup IceHrm Installation folder and database.

2. If you are on v13.X.OS execute following scripts on your database in given order. (DB scripts can be found inside icehrm/scripts folder of icehrm_v16.0.OS.zip)
 - upgrade_v13.3.OS_to_v14.0.OS.sql
 - upgrade_v14.0.OS_to_v15.0.OS.sql
 - upgrade_v15.0.OS_to_v15.2.OS.sql
 - upgrade_v15.2.OS_to_v16.0.OS.sql
 
3. If you are on v14.X.OS execute following scripts on your database in given order (DB scripts can be found inside icehrm/scripts folder of icehrm_v16.0.OS.zip)
 - upgrade_v14.0.OS_to_v15.0.OS.sql
 - upgrade_v15.0.OS_to_v15.2.OS.sql
 - upgrade_v15.2.OS_to_v16.0.OS.sql
 
4. If you are on v15.0.OS execute following scripts on your database in given order (DB scripts can be found inside icehrm/scripts folder of icehrm_v16.0.OS.zip)
 - upgrade_v15.0.OS_to_v15.2.OS.sql
 - upgrade_v15.2.OS_to_v16.0.OS.sql
 
5. If you are on v15.2.OS execute following scripts on your database in given order (DB scripts can be found inside icehrm/scripts folder of icehrm_v16.0.OS.zip)
 - upgrade_v15.2.OS_to_v16.0.OS.sql 
 
6. Then delete all folders inside icehrm installation path except "app" folder

7. Exteact icehrm_v16.0.OS.zip and copy all folders into icehrm installation path except "app" folder


#### Upgrading from IceHrm Open Source Edition older than v12.X to IceHrm latest version

Download icehrm latest from [https://github.com/gamonoid/icehrm/releases/latest](https://github.com/gamonoid/icehrm/releases/latest)

1. First backup IceHrm Installation folder and database.

2. Download db upgrade scripts from [https://bitbucket.org/thilina/icehrm-opensource/downloads/upgrade_icehrm_opensource_db.zip](https://bitbucket.org/thilina/icehrm-opensource/downloads/upgrade_icehrm_opensource_db.zip)

3. Upgrade your old IceHrm DB to v14.0 using one of the following scripts depending on your version
  - For v7.x use upgrade_v7.x_to_v14.0.PRO.sql  
  - For v8.x use upgrade_v8.x_to_v14.0.PRO.sql  
  - For v9.x use upgrade_v9.x_to_v14.0.PRO.sql  
  - For v10.x use upgrade_v10.x_to_v14.0.PRO.sql  
  - For v12.x use upgrade_v12.x_to_v14.0.PRO.sql  
  
4. Then upgrade to latest version DB by executing following scripts
    
  - upgrade_v14.0.PRO_to_v15.0.PRO.sql
  - upgrade_v15.0.PRO_to_v16.0.PRO.sql
  - post_verify_vrsions_older_than_v10.x_to_v16.0.PRO.sql
  
5. Then delete all folders inside icehrm installation path except "app" folder

6. Exteact icehrm_v16.0.OS.zip and copy all folders into icehrm installation path except "app" folder




### Upgrading IceHrm Enterprise v15.0 to IceHrm Pro latest + Enterprise Features

Icehrm Enterprise Edition is being replaced with IceHrm Pro v16.1.PRO. The reason is that 
IceHrm Pro v16.1 has all the features of enterprise edition except the recruitment module.

Since IceHrm pro has no restriction on number of employees, we decided that it is unfair for 
enterprise users to be limited by such restrictions. So now you can upgrade your enterprise
edition to icehrm pro v16.1. Please follow instructions below.


1. Download IceHrmPro.zip from upgrade email you have received

2. Backup existing IceHrm Installation folder and database

3. Extract icehrm_v16.0.PRO.zip

4. Execute upgrade_v15.0.PRO_to_v16.0.PRO.sql (in icehrm_v16.0.PRO.zip/scripts folder)

5. Then delete all folders inside icehrm installation path except "app" folder

6. Exteact icehrm_v16.1.PRO.zip and copy all folders into icehrm installation path except "app" folder

7. Copy following folders from icehrm_backup/admin/ folder to icehrm/admin folder for recruitment module
    - candidates
    - jobsetup
    - jobpositions
    