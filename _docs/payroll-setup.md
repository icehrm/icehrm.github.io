---
layout: docs
title: Payroll Setup
prev_section: salary
next_section: icehrm-pro
permalink: /docs/payroll-setup/
---

| :exclamation:  The latest documentation is available [here](https://icehrm.com/explore/docs-category/payroll/).   |
|-----------------------------------------|

### Payroll Module Usage

You may use IceHrm to achieve the following tasks:

- Store employee salary details with and group into salary components
- Calculate various deductions
- Include overtime payments into employee salary slips depending on number of hours
- Add salary components based on attendance sheets
- Allow employees to download payslips in PDF format

### Elements of IceHrm Payroll Setup

Once you have added the salary component types, salary components and employee salary components, go to Payroll -> Payroll Reports. Let us first understand the different tabs under the payroll reports.

<b>Payroll Groups </b>– The first thing you should do is create a payroll group. Each company should have at least one payroll group defined. Payroll groups are used to group payroll columns and group employees into payroll groups. You might have different calculations or payroll columns for different employees, for this you can create different payroll groups and group employees to the correct payroll group.

<b>Payroll Columns</b> – Once you have added a payroll group, you can start adding payroll columns. Under payroll columns, add the columns that are required for the payroll reports and the payslips. Each payroll column should be added to a specific payroll group.

<b>Saved Calculations</b> – Under saved calculations, you can define you can add calculations such as tax calculations and use these saved calculations in your payroll columns. But we recommend you use the advanced functions section in payroll columns for advanced calculations instead of saved calculations.

<b>Payslip Templates </b>– Once the payroll columns are added, you can create your own payslip templates under the Payslip Templates tab.
Payroll Employees – Each employee should belong to a payroll group. So when adding payroll employees, make sure you select the correct payroll group.

<b>Payroll Reports </b>– Once all the above tabs are set up, you can now create a payroll report. To create a payroll report, give the report a suitable name, select the dates, select the correct payslip template and the payroll group, add the payroll columns and then process it to get the report.


### Define Payroll Employees and Pay Period

Under Payroll -> Payroll menu there is a tab named "Payroll Employees" which you can use to add employees
to your payroll. Payroll will be calculated only for the employees added to "Payroll Employees". This is because
in some cases you need to use different rules to calculate payroll for different employee groups.

When adding a payroll employee you will notice that you need to select a "Pay Frequency". This
should match the "Pay Frequency" of the payroll report. Only then the payroll will be calculated
for an employee.
 

