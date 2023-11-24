---
layout: docs
title: Change log - Pro
prev_section: changelog
next_section: settings
permalink: /docs/changelog-pro/
---

## Change log

Click [here](https://icehrm.com/explore/release-notes/) for the latest release notes.

## Release note v28.1.0.PRO

### 🧲 New features

* Improved tables for displaying data in several modules
* Faster data loading (specially for employee module)
* Initials based profile pictures
* Re-designed login page
* Re-designed user profile page
* Improvements to filtering
* New REST endpoints for employee qualifications 

### 🐛 Bug fixes
* Fixed, issue with managers being able to create performance reviews for employees who are not their direct reports
* Fixed, issues related to using full profile image instead of using smaller version of profile image
* Changing third gender to other
* Fixed, not listing countries on job application page
* Improvements and fixes for internal frontend data caching

## Release note v27.1.0.PRO

### New features

* UI/UX improvements
* Custom user role permissions
* Employee edit form updated
* Employee daily task list
* Attendance and employee distribution charts on dashboard
* Improvements to company structure and company assets module

[Read more about the release here](https://medium.com/icehrm/some-new-compelling-changes-to-icehrm-eba62c40ef9f)

### 🐛  Bug fixes
* Fix leave carry forward issues, when employee leave periods used in combination with leave rules

## Release note v27.0.2.PRO

This fixes some major issues found in v27.0.1.PRO

### 🐛  Bug fixes

* Filtering across whole application was broken and now it's fixed
* Fixed the issue related to photo not being shown to the admin when photo attendance is enabled

### 🧑🏻‍💻 For developers

* We have added support for vagrant development environment based on Debian 10 / PHP 7.3 \(with Xdebug\)  / Nginx / MySQL

## Release note v27.0.0.PRO

### New features

* UI/UX improvements \(new fonts / better spacing\)
* Payroll module improvements
* Security improvements to password policy
* Adding total leave days column, when displaying employee leave data
* Adding more leave information to the email sent to managers for approving leave requests
* Ability to limit leave requests to full-day and half-day
* Albanian language is now available
* Ability to deploy using docker

### For developers

* Developer environment based on docker [https://www.youtube.com/watch?v=sz8OV\_ON6S8](https://www.youtube.com/watch?v=sz8OV_ON6S8)
* [Developer guide](https://icehrm.gitbook.io/icehrm/developer-guide/create-new-module)
* Fully supports all php versions &gt;= 5.6 upto v7.3 \(php 5.6 support is deprecated and not recommended\)

### Bug fixes

* Fixes to newly found vulnerabilities \([https://github.com/gamonoid/icehrm/issues/213](https://github.com/gamonoid/icehrm/issues/213)\): credits to: [Talos](https://talosintelligence.com/)
* Fixing leave module, calculations for complex leave rule combinations
* Fixed the travel request approval for managers
* Fixed the issue with attendance source IP display
* Fixing Api issues in PHP 7.3

## Release note v26.9.0.PRO

### New features

* Teams module for creating teams in company
* Enable custom user roles
* Introducing fine-grained user role management by adding restricted user roles
* Introducing new Gender group 'Divers' for employees and candidates \(according to German intersex law\)

### Bug fixes

* Show only active job posts
* For employee leave period based leave types - fix available leave balance amount when applying for a leave
* Fix eave calculations using leave rules depends on employee experience

## Release note v26.7.0.PRO

### Leave Management

* Leave periods can be based on employee joined date or confirmation date
* Now you can see the detailed leave calculation for each leave type in leave entitlement

### Data Import Improvements

* Download file template via data importer \(the file will be automatically generated using fileds in data importer\)
* Add a common data importer which makes it easy to create custom data importers
* Custom field data can now be imported
* Improvemnts to import file validations

### Payroll & Payslip

* Payroll columns can have simple java script based calculations
* Any employee information \(general fields or custom fields\) can now be shown on payslip
* Any employee information \(general fields or custom fields\) can be used for payroll calculations

### Other

* Improvements to automated E2E test

Release note v26.6.0.PRO
------------------------
### Improved Recruitment
 * Now you can add rich text when creating Job posts
 * Ability to select a hiring manager for each job post, who is getting email updates about now candidates and interviews
 * Improvements to the page job position page such as showing hiring manager details and simplified application form
 * Send a confirmation email to candidate after receiving job application
 * Ability to schedule interviews with multiple interviewers
 * Sending email notifications to interviewers and hiring manager when an interview is scheduled
 * Fixing issues related to sharing jobs posts on social media

### Leave Module
 * Ability to create leave rules targeting specific leave periods. (Example use case: configuring different leave carry forward settings for each leave periods)
 * Fixing calculation issues occurred due to having future leave periods
 
### Improvements to Attendance Tracking
 * Tracking IP and location of the employee when marking attendance, this is done when updating attendance via mobile
 * Ability to control location tracking via mobile using server side settings
 * Compatible with location tracking with latest version of Icehrm Mobile app on AppStore (https://apple.co/2Yrtxoy) and Google Play (http://bit.ly/2OkMmKe)

### Other Features
 * Some Improvements to UI such as updating Icons and upgrading font-awesome to its latest version
 * Improvements to translations
 
### Other Fixes
 * Order projects by name on Timesheet project listing (This is to make it easier to edit timesheets with many projects)
 * Link home page user profile to employee profile update page
 * Fix issues related to configuring Api with mobile app
 
### Security Improvements
 * Upgrade npm missing dependencies


Release note v26.4.0.PRO
------------------------

### Features
 * Add staff directory module [](https://github.com/gamonoid/icehrm/issues/168)
 * Update client-side js to ES6 [](https://github.com/gamonoid/icehrm/issues/163)
 * Compatible with IceHrm Mobile App [](https://github.com/gamonoid/icehrm/issues/169)
 * Use npm libraries when possible
 * Add gulp build for frontend assets
 * Allow generating QR code with rest api key (https://github.com/gamonoid/icehrm/issues/169)
 * Updated readme for development setup with vagrant
 * Changes to leave entitlement layout
 * Show leave breakdown properly on leave entitlement
 * Display the leave type or rule affecting the leave entitlement
 * Order all leave listings by latest start date
 * Exclude PTO and carried forward leave days from accrued leave calculation
 * New api endpoints for leave and expense

 
### Fixes
 * Add missing employee details report
 * Fix: Labels of 'Employee Custom Fields' not displayed [](https://github.com/gamonoid/icehrm/issues/146)
 * Fix: Work week for all counties can not be edited [](https://github.com/gamonoid/icehrm/issues/155)
 * Fix: Custom fields are not shown under employee profile [](https://github.com/gamonoid/icehrm/issues/159)
 * Fix: Additional buttons shown below timesheet list [](https://github.com/gamonoid/icehrm/issues/171)
 * Updates to Italian translations [](https://github.com/gamonoid/icehrm/pull/166) by https://github.com/nightwatch75
 * Fix issue: incorrect leave carry forward
 * Fix: Work week for all counties can not be edited
 * Error sending notification when expense is approved [](https://github.com/gamonoid/icehrm/issues/157)
 * Fix: When cancelling a leave request no email is sent to the manager (https://github.com/gamonoid/icehrm/issues/158)

Release note v25.1.0.PRO
--------------------------

### Features
 * Multiple leave period support
 * Arabic language support
 
### Fixes
 * Fix PHP v5.6 compatibility issues

Release note v25.0.0.PRO
--------------------------

### Features
 * Performance review module
 * Company asset management module
 * Improvements to email templates
 * Support for Serbian, Portuguese, Norwegian, Swedish and Dutch languages
 
### Fixes
 * Allow making non required date fields empty
 * Fix leave approval issue for languages other than English

Release note v24.0.0.PRO
----------------------------

This release includes some very critical security fixes. We recommend upgrading your installation to latest release.

### Features
 * Allow passing additional parameters to payroll predefined methods
 * Pass leave type name in function field to get leave count for a given type
 * Make document valid until field optional
 * Add employee name to payroll report
 * Show supervisor name on employee profile
 * Add custom fields to employee report
 * Add filter by status feature to subordinate time sheets
 * Make document attachment mandatory

### Security Fixes
 * Fix missing login form CSRF token
 * Fix risky usage of hashed password in request
 * Fixing permission issues on module access for each user level
 * Prevent manager from accessing sensitive user records
 
### Other Fixes
 * Hide employee salary from managers
 * Prevent manager from accessing audit, cron and notifications
 * Prevent managers from deleting employees
 * Remove manager access from employee history
 * Fix recruitment module security issues
 * Fix: Training coordinator is not able to edit training session
 * Validate overtime start and end times
 * Fix: Employee "Subordinate expense" status filter is not visible
 * Do not allow employees or managers to delete expense requests which are not pending
 * Fix issue: employee can download draft payroll
 
 
Release note v23.0.0.PRO
------------------------
This release include some security fixes. We recommend upgrading your installation to latest release.
Now feature wise IceHrm cloud and pro are same 

### Features
 * Recruitment module
 * Announcement module
 * Conversation module - company public discussion board
 * Loading last used module when revisiting application
 * Finnish language support (Beta)
 * Improvements to German, Italian and Chinese language translations
 * Allow quickly switching languages
 * Improvements to security for preventing possible LFI attacks
 * Allow manual date inputs
 * Custom fields for travel requests
 * Allow importing approved overtime hours into payroll
 * Add date and time masks
 
 
### Fixes
 * Fix logout cookie issue, by clearing remember me cookie when logging out
 * Improve privacy for GDPR
 * Improvements to file upload field
 * Fix issue: attendance rest end point not working on php 5.6
 * Fix, leave request attachment can not be seen

Release note v22.0.0.PRO
------------------------
### Features
 * Support multiple leave groups ([](https://thilinah.gitbooks.io/icehrm-guide/content/advanced-leave-policy.html))
 * Allow filtering by all leave statuses
 * New view for leave time-line
 * Improvements to leave module documentation
 * Improvements to module naming  
 
### Fixes
 * Remove unwanted default leave periods
 * Fix issue with approved leave cancellation
 * Fix issue: filter dialog default values are not selected
 * Fix issue: department head can be an employee outside the department
 * Fix issue: department head or supervisor (who has manager leave access) can't use switch employee feature
 * Fix issue: employee name is not visible on report if middle name is empty
 * Fix issue with viewing files attached to leave requests

Release note v21.1.0.PRO
------------------------
### Features
 * Creating leave rules based on years of experience of employees
 * UI improvements (help button and error messages)
 * Allow adding placeholders to test fields
 * Improvements to German Translations
 
### Fixes
 * Fix leave rule selection issue when leave groups are used
 * Fixing notification issues
 
Release note v21.0.0.PRO
------------------------
### Features
 * Improvements to leave/PTO module
 * Ability to carry forward leave balance indefinitely
 
### Fixes
 * Fix outdated Mail library
 * Fix issue: JSON strings not supported in GET request

Release note v20.3.0.PRO
------------------------
### Features
 * Employee and Attendance REST Api Released
 * Import/Export for Payroll Configurations
 * Ability to import employee approved time sheet hours to payroll
 * Ability to import approved expenses into payroll
 * Swift Mailer based SMTP support (no need to install Net_SMTP anymore)
 * Add direct Edit button on employee list
 
### Fixes
  * Fix DB connection issues due to special characters in password
  * Fixes for custom field saving issues in mysql v5.7.x
  
Release note v20.2
------------------
### Fixes
  * Fix for resetting modules

Release note v20.1
------------------
### Features
 * Compatible with MySQL 5.7 Strict Mode
 * PSR-2 compatible code
 * Employee History Module
 * Staff Directory
 
### Fixes
  * Fix: password reset not working
  * Fix: limiting selectable countries via Settings

Release note v19.4
------------------

### Features
 * DB migration support - no need to upgrade your database manually for every release
 * Adding calender view to timesheet module
 * Ability to quickly edit timesheets using an editable table
 * Subordinate timesheets can be filtered by employee

### Fixes
 * Fix for setting user language
 * Fixing issues with Employee time entry report
 * Fix for displaying custom fields under employee profile page

Release note v19.0
------------------

### Features
 * DB migration support - no need to upgrade your database manually for every release
 * Payroll Module Improvements
 * Development environment and vagrant machine is available now
 * Department heads who can manage all employees attached to a company structure

Release note v18.0
------------------

### Fixes
 * Fix issue: admin dashboard translations are not working

Release note v18.0
------------------
### Features
 * Translations (beta) for German, French, Polish, Italian, Sinhala, Chinese, Japanese, Hindi and Spanish
 * PDF Reports
 * Ability to specify department heads
 * Add advanced custom fields to employees via UI
 * Allow indirect admins to approve travel requests
 * Adding more languages to Language meta data table
 * Improvements to report module
 * Ability to select sections for placing custom fields on employee detail view screen
 * Introducing clone button
 * Unlimited custom fields for employees
 * PDF report for monitoring time employee spent on projects
 * Report files module - Allow downloading all previously generated reports

### Fixes
 * Fix: subordinates are not showing beyond first page issue


Release note v17.1
------------------

#### Fixes
 * Fix: recruitment module candidates not loading issue
 * Fix report files issue


Release note v17.0
------------------
#### Features
 * Introducing clone button
 * Unlimited custom fields for employees
 * PDF reports using wkhtmltopdf
 * Introducing pdf report for monitoring time employee spent on projects
 * Report files module - Allow downloading all previously generated reports

#### Fixes
 * Attendance sheets module - allow setting overtime calculation period
 * Remove pwd button from user roles tab
 * Allow viewing paid invoices (Enterprise only)
 * Adding missing jQuery UI


Release note v16.1
------------------

#### Fixes
 * Fix LDAP login issues
 * Prevent webserver from printing errors on screen
 * Allowing "." and "-" on username

Release note v16.0
------------------

#### Features
 * Payroll reports module for IceHrm Enterprise
 * Improvements to salary module
 * Employee History Tracking module - Track all important changes to an employee
 * Initial implementation of icehrm REST Api
 * Improvements to data filtering
 * Multiple tabs for settings module
 * Overtime reports - now its possible to calculate overtime for employees.compatible with US overtime rules
 * A tab to list documents added under employee view
 * Logout the user if tried accessing an unauthorized module
 * Setting for updating module names
 * Add department filter to employee leave report

#### Fixes
 * Fix issue: classes should be loaded even the module is disabled
 * Checking user permission before adding default module for user
 * Deleting the only Admin user is not allowed
 * Fixes for cron issues
 * Fixes for handling non UTF-8
 * Fix for non-mandatory select boxes are shown as mandatory
 * Fix: Indirect supervisor full leave list not showing


Release note v15.0
------------------

#### Features
 * Training module added to IceHrm Pro
 * LDAP module added to IceHrm Pro
 * Clear HTML5 local storage when logging in and switching users
 * Adding indirect supervisors to employees
 * Allow indirect supervisors to approve leave requests
 * Improve leave status change workflow
 * Showing a loading message while getting data from server
 * Adding a new field to show total time of each time sheet
 * New report added for listing Employee Time Sheets
 * Company logo uploaded via settings will be used for all email headers

#### Fixes
 * Fix issue: default module URL is incorrect for Employees
 * Fix date parsing issue in time sheets
 * AWS phar is included only when required



Release note v14.6
------------------

#### Features
 * Adding a parameter for leave types and leave rules for setting maximum number of leave days that can be carried forward from one year to another

#### Fixes
 * When a leave is cancelled, another leave can not be applied on the same day
 * Fix dashboard attendance count

Release note v14.4
------------------

#### Fixes
 * Fix for Paid time off not getting bound to leave period issue
 * Fix amount label name in expense module
 * Fix for expenses report (payee field is not in report)
 * Fix issue: users are not redirected to default module after login (IcehrmPro)
 * Run cron jobs only is the file exists

Release note v14.0
------------------

#### Features
 * Expense management module
 * Improvements to travel management module to change the process of applying for travel requests
 * Employee document expiry notifications
 * Immigration documents has been removed from travel module and users should use documents module instead
 * Leave filtering with leave period
 * New report add for getting travel requests
 * Bunch of UI improvements including changing menu order and font sizes
 * Ability to stop all notifications for certain leave types
 * Add a setting to use server time for time zone defined on department that a user is attached to create new attendance records
 * Improvements to admin/manager and user dashboard
 * Managers allowed to view/add/edit employee documents
 * New reports added for employee expenses and travel

#### Fixes
 * Fix issue: leave type not included in employee leave report
 * Fix invoice ordering
 * Fix unavailable help links
 * Remove manager access from recruitment setup
 * Remove Add New button from employees module for managers
 * Remove Add New button from archived and terminated employees tabs
 * Fix - training module view session info from my training sessions tab not working


Release note v13.4
-----------------

#### Features

#### Fixes
 * Fix employee leave report leave type field

Release note v13.0
-----------------

#### Features
 * Recruitment module
 * Allow managers to edit attendance of direct report employees

#### Fixes
 * Employee switching issue fixed
 * Fix terminated employee labels
 * Fix issue with punch-in

Release note v12.6
-----------------

#### Features
 * Charts module
 * Code level security improvements

#### Fixes
 * Employee switching issue fixed


Release note v11.1
-----------------

#### Features
 * Add/Edit or remove employee fields


Release note v11.0
-----------------

#### Features
 * Employee data archiving
 * Leave cancellation requests
 * Adding view employee feature

#### Fixes
 * Improvements to date time pickers


Release note v10.1
-----------------

#### Features
 * Integration with ice-framework (http://githun.com/thilinah/ice-framework)
 * Option for only allow users to add an entry to a timesheet only if they have marked atteandance for the selected period
 * Restricting availability of leave types to employees using leave groups
 * Admins and add notes to employees

Release note v9.1
-----------------

#### Fixes
 * Add missing S3FileSystem class
 * Fix issue: passing result of a method call directly into empty method is not supported in php v5.3


Release note v9.0
-----------------

#### Features
 * New user interface
 * Decimal leave counts supported

Update icehrm v8.4 to v9.0
--------------------------

 * Make a backup of your icehrm db
 * Run db script "icehrmdb_update_v8.4_to_v9.0.sql" which can be found inside script folder of icehrm_v9.0
 * remove all folders except app folder in icehrm root folder
 * copy all folders except app folder from new installation to icehrm root folder


Release note v8.4
-----------------

#### Fixes
 * Fix leave carry forward rounding issues
 * Fix issue: select2 default value not getting set for select2
 * Fix issue: email not sent when admin changing leave status

Release note v8.3
-----------------

#### Fixes
 * Fix user table issue on windows, this will resolve errors such as: (Note that this fix has no effect on unix based installations)
 * Admin not able to view user uploaded documents
 * Admin not able to upload documants for users
 * Admin can not view employee attendance records
 * Employee projects can not be added


Release note v8.2
-----------------

#### Features
* Instance verification added

Release note v8.1
-----------------

#### Fixes
* Fixed bug that caused a fatal error in php v5.4
* aws2.7.11 phar file replaced by a aws2.7.11 extracted files
* old aws sdk removed

Release note v8.0
-----------------

#### Features
* Admin dashbord module
* If the employee joined in current leave period, his leave entitlement is calculated proportional to joined date
* Improvements to reporting module
* Adding new employee time tracking report
* Join date for employees made mandatory
* Sending welcome email when a user is added
* Let users directly reply to admin user from any email sent out from icehrm
* All the users who are not admins must have an employee object attached
* Upgrade aws sdk to v2.7.11
* Allow employees to change password
* Use only the email address defined under user for sending mails
* Making work_email and private_email fields optional


#### Fixes
* Upload dialog close button issue fixed

Release note v7.2
-----------------

#### Fixes
* Some critical vulnerabilities are fixed as recommend by http://zeroscience.mk/en/

Release note v7.1
-----------------

#### Features
* Improved company structure graph
* Leave notes implementation � Supervisor can add a note when approving or rejecting leaves
* Filtering support
* Select boxes with long lists are now searchable
* Add/Edit/Delete company structure permissions added for managers
* Add ability to disable employee information editing

#### Fixes
* Make loans editable only by admin
* Fix: permissions not getting applied to employee documents
* Fix error adding employee documents when no user assigned to the admin

#### Code Quality
* Moving all module related code and data into module folders

Release note v6.1
-----------------

Leave carry forwared related isue fixed

Release note v6.0
-----------------

* Features
* Notifications for leaves and timesheets
* Leave module accrue and leave carry forward
* Employee leave entitlement sub module
* Ability to put system on debug mode
* Allow admins to see documents of all the employees at one place
* Backup data when deleting an employee
* Employee attendance report added
* Changes to time entry form in timesheet module to make time entry process faster
* Admin can make all projects available to employees or just the set of prjects assigned to them using Setting "Projects: Make All Projects Available to Employees"
* Employee document, date added field can not be changed by the employee anymore
* About dialog added for admins

* Fixes
* Fix default employee delete issue (when the default employee is deleted the admin user attached to it also get deleted)
* Fix user duplicate email issue
* Fix manager can not logout from switched employee
* Remove admin guide from non admin users

Release note v5.3
-----------------

* Fixes
* Fix missing employee name in employee details report

Release note v5.2
-----------------

* Fixes
* Remove unwanted error logs
* Fix attendance module employee permission issue
* Resolve warnings
* Remove add new button from subordinates module
* Adding administrators' guide

Release note v5.1
-----------------

* Fixes
* Fixing for non updating null fields
* https://bitbucket.org/thilina/icehrm-opensource/commits/df57308b53484a2e43ef5c72967ed1cd0dc756cc

Release note v5.0
-----------------

* Features
* New user permission implementation
* Adding new user level - Manager

* Fixes
* Fixing remote table loading issue

Release note v4.2
-----------------

#### Fixes
* https://bitbucket.org/thilina/icehrm-opensource/issue/23/subordinate-leaves-pagination-not-working
* https://bitbucket.org/thilina/icehrm-opensource/issue/20/error-occured-while-time-punch


Release note v4.1
-----------------

#### Features
* Better email format for notifications
* Convert upload dialog to a bootstrp model

* Fixes
* Fix error sending emails with amazon SES
* Fix errors related to XAMPP and WAMPP servers
* Fix php warnings and notifications
* Fix company structure graph issues
* Allow icehrm client to work without an internet connection
* Fix installer incorrect base url issue
* Fix empty user creation issue
