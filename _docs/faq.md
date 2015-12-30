---
layout: docs
title: FAQ
prev_section: installation
next_section: changelog
permalink: /docs/faq/
---

## Time Management

### How to add edit time sheets of your subordinates (Direct Reports)?

A manager can only make modifications to their direct reports. First you need to login as the manager and go to Employees -> Employees module.

- In that module click “Login as employee” icon of one of your subordinates.

- Then goto “Time Management” => “Time Sheets” and one of the time sheets (all the time sheets displayed here are belongs to the your switched subordinate)

- Hit edit time sheet and add a time entry


## Leave/Paid Time Off Management

### How to allocate 160 hours instead of days in leave management module?

When adding leave entitlement you should primarily use leave types. Since you are getting 160 hours a year 
you can create a leave type called Annual leave and add 20 (160/8) days as leave amount for that leave type.
IceHrm assumes a 8 hour work day. So when you do that you can apply for a leave for 1 day or 1 hour. 
If you apply for a 1 day leave your leave entitlement available leave count will become 19. 
If you apply for one hour it'll take away 0.125 from your leave entitlement.

### How to allocate different amounts of leave to different employees or categories?

Let's say some employees have only 150 hours of paid time off. (For an example all "Marketing Managers"). 
To implement this you can go to add a leave rule for Marketing Managers for annual leave with leave amount 
of only 18.75 days (150/8). Leave rules are not bound to any leave period, so the leave rules that you define 
will be applied to all the leave periods.

### How to compensate an employee with Paid time off?

Assume that an employee worked on a holiday due to some urgent issue. You need to compensate him/her with an 
additional day off. In that case you can use "Paid Time Off" tab to add an additional leave to the employee. 
Paid time off also used to add leaves carried forwarded from previous years where you have not been using icehrm.
If you want to remove some leave from an employee you can add minus PTO also.

### I've not been using IceHrm during 2015, But when configuring leave balances for 2016 different employees are having different leave balances carried forwarded from 2015. How to handle this?

You should add these as PTO amounts for leave period 2016 under "Paid Tome Off" tab. You will have to add one record for each employee.
This is a one time setup, from 2017 you can use automatic leave carry forwarding.




