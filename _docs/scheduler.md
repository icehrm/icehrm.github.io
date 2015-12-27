---
layout: docs
title: LDAP Config
prev_section: ldap
next_section: companystructure
permalink: /docs/scheduler/
---

Notification cron is used to send periodic notifications. Document expiry notifications will depend on this scheduler.

To trigger the scheduler you need to run following file

<code>(IceHrm Root)/app/cron.php</code>

### Setting up Linux Cron

In linux environment a cron should be setup to run every 10 minutes.

This can be done by placing following line in your crontab. Depending on your server you can edit crontab 
<code> sudo vi /etc/crontab </code>

or you can use <code>crontab -e</code> commend

<code>
*/10 * * * * (IceHrm Root)/app/cron.php
</code>

* make sure that (IceHrm Root)/app/cron.php file is executable *


### Setting up Windows Scheduler

For setting up the windows scheduler please check [http://windows.microsoft.com/en-au/windows/schedule-task#1TC=windows-7](http://windows.microsoft.com/en-au/windows/schedule-task#1TC=windows-7)
