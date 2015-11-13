---
layout: docs
title: Employee Management
prev_section: companystructure
next_section: jobdetails
permalink: /docs/employees/
---
Employees module is used to list, edit, add and search employees in your company. 
You can use the search box to search employees by ID, name or department. 
Also you can use filter button to filter employees by job title, department or supervisor.

###Difference Between Users and Employees

A user is a person who can login to icehrm. It’s not required for admin users to have an employee attached but 
each non admin user must have an associated employee. Having an employee added in icehrm won’t 
allow the person to login to icehrm. You need to create user with a Manager or Employee user level 
for that employee to be able to login to the system.

###Adding Employees

Adding employees to ICE Hrm can only be done by the admin. The employee Id field should have a unique value. 
In order to complete adding an employee you need to provide job title, employment status and pay grade. 
These values can be defined in admin: Jobs module.

Once an employee is added to the system you will be asked to create a user for the newly added employee

###Switching Employees

One of the key features of ICE Hrm, is admins and mangers ability to login as another employee. 
This feature can be used to apply leaves, add attendance records or update time sheets behalf of other employees.

To login as an employee you can use the  switch user icon on employee list or the “Switch Employee” menu in top right hand corner.

In open source version you must switch employee to edit employee basic information like skills and qualifications. 
But on Pro and Enterprise versions you can directly update employee information through Advanced Employee Management module.


