---
layout: docs
title: Installation
prev_section: home
next_section: faq
permalink: /docs/installation/
---

Getting IceHrm installed only take a few minutes. If it
ever becomes a problem, please <a href="https://github.com/gamonoid/icehrm/issues/new" target="_blank">file an issue</a>
describing the issue you encountered and how we might make the process easier.

### Requirements

Before installing IceHrm please make sure your system supports following requirements
you’ll need to make sure your system has before you start.

- [PHP 5.3 or Higher](http://php.net/)
- Net_SMTP extension for PHP
- [MySQL v5.5](http://dev.mysql.com/downloads/)
- [php-mysql extention](http://php.net/manual/en/mysqli.installation.php)
- [PHP GD library](http://php.net/manual/en/mysqli.installation.php)
        -$> apt-get update
        -$> apt-get install php5-gd

#### Optional Modules

These are optional components which could improve icehrm performance

- [Memcache](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-memcache-on-ubuntu-14-04)


### Installation

- If you are installing the open source version, download the latest release from [GitHub](https://github.com/gamonoid/icehrm/releases/latest)

- If you are installing the pro version or enterprise you should have received the files after purchase.

- Copy the downloaded file to the path you want to install iCE Hrm in your server and extract.

- Create a mysql DB for and user. Grant all on iCE Hrm DB to new DB user.

- Visit iCE Hrm installation path in your browser.

- During the installation form, fill in details appropriately.

- Once the application is installed use the username = admin and password = admin to login to your system.

<div class="note warning">
  <h5>Remove "install" folder</h5>
  <p>Please rename or delete the install folder ((ice hrm root)/app/install) since it could pose a security threat to your iCE Hrm instance.</p>
</div>

### Problems with Email Setup

If you are facing issues while setting up email you may try following suggestions:

- Check if [Net_SMTP](http://webplay.pro/groupware/webmail/horde/pear-net_smtp-class.html) extension is installed
    
- Try using an standalone PHP email sender script to test emails [](https://www.rackspace.com/knowledge_center/article/test-php-smtp-functionality)

- Check whether your out bound posts are allowed by the firewall

- Try using Amazon SES. You only need to configure AWS Keys in settings area and set Email Sender Type to SES.


### Additional installation instructions for Enterprise version

- After the installation get the License ID from EULA.PDF and update "Instance :ID" under System->Settings
- Copy provided icehrmkey.key to icehrm root folder
- Verify the instance using verification dialog
