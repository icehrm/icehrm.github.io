---
layout: docs
title: Installation
prev_section: home
next_section: companystructure
permalink: /docs/installation/
---

Getting IceHrm installed only take a few minutes. If it
ever becomes a problem, please [file a issue](https://github.com/thilinah/icehrm/issues/new)
describing the issue you encountered and how we might make the process easier.

### Requirements

Before installing IceHrm please make sure your system supports following requirements
you’ll need to make sure your system has before you start.

- [PHP 5.3 or Higher](http://php.net/)
- [MySQL v5.5](http://dev.mysql.com/downloads/)


### Installation

- Download the latest release from [GitHub](https://github.com/thilinah/icehrm/releases/latest)

- Copy the downloaded file to the path you want to install iCE Hrm in your server and extract.

- Create a mysql DB for and user. Grant all on iCE Hrm DB to new DB user.

- Visit iCE Hrm installation path in your browser.

- During the installation form, fill in details appropriately.

- Once the application is installed use the username = admin and password = admin to login to your system.

<div class="note warning">
  <h5>Remove "install" folder</h5>
  <p>Please rename or delete the install folder (<ice hrm root>/app/install) since it could pose a security threat to your iCE Hrm instance.</p>
</div>