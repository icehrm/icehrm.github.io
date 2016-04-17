---
layout: news_item
title: "IceHrm v16.0 for Open Source Edition"
date: "2016-04-17 02:12:52 +0530"
author: thilinah
version: 16.0
categories: [release]
---

v16.0.OS for IceHrm Open Source Edition was released on 17th April 2016 with a lot of new modules,
improvements to existing features and bug fixes

#### Advanced Employee Management Module is now available with OS Edition

This is a major improvement in v16.0.OS which will be one of the main reasons for your to upgrade
your old icehrm installations to v16.0.OS.

#### LDAP module for Open Source Edition

The other new feature is LDAP login. Now in OS edition you can configure your LDAP server to be used
for icehrm uses to login. For more information please check (http://blog.icehrm.com/docs/ldap/)[]

#### Here is the complete list of changes on IceHrm v16.0.OS 

##### Features
 * Advanced Employee Management Module is now included in IceHrm Open Source Edition
 * LDAP Module which was only available in IceHrm Enterprise is now included in open source also
 * Initial implementation of icehrm REST Api for reading employee details
 * Improvements to data filtering
 * Multiple tabs for settings module
 * Overtime reports - now its possible to calculate overtime for employees.compatible with US overtime rules
 * Logout the user if tried accessing an unauthorized module
 * Setting for updating module names
 
##### Fixes
 * Fix issue: classes should be loaded even the module is disabled
 * Deleting the only Admin user is not allowed
 * Fixes for handling non UTF-8
 * Fix for non-mandatory select boxes are shown as mandatory