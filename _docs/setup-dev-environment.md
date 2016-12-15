---
layout: docs
title: Development
prev_section: icehrm-pro
next_section: setup-rest-api
permalink: /docs/dev-env/
---

## Setup IceHrm Development Environment

IceHrm development environment is packaged as a Vagrant box. I includes php7, nginx, phpunit and other
software required for running icehrm

### Preparing development VM

- Clone icehrm from https://github.com/gamonoid/icehrm.git or download the source

- Install Vagrant [](https://www.vagrantup.com/downloads.html)

- Install Vagrant host updater plugin [](https://github.com/cogitatio/vagrant-hostsupdater)


- Run vagrant up in icehrm root directory (this will download icehrm vagrant image which is  ~1 GB)

```
~ $ vagrant up
```

- Run vagrant ssh to login to the Virtual machine

```
~ $ vagrant ssh
```

- Install ant build in your VM

```
~ $ sudo apt-get install ant
```

- Build Icehrm (your icehrm root directory is mapped to /vagrant/ directory in VM)

```
~ $ cd /vagrant
~ $ ant buildlocal
```

- Navigate to [](http://clients.app.dev/dev) to load icehrm from VM. (user:admin/pass:admin)

- Runing unit test

```
~ $ cd /vagrant
~ $ phpunit
```
<br/>
<div class="note info">
  <h5>Note to Developers</h5>
  <p>Every time you change icehrm code you need to execute "ant buildlocal" in your VM before testing</p>
</div>