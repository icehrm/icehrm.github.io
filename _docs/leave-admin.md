---
layout: docs
title: Leave Management
prev_section: documents
next_section: leave-rules
permalink: /docs/leave-admin/
---

| :exclamation:  The latest documentation is available [here](https://icehrm.com/explore/docs-category/leave-management/).   |
|-----------------------------------------|

IceHrm has once of the best leave management systems among all the HRM software.
Leaves module is used to define all the elements required to manage leave application process of your company, 

including:

- Leave periods
- Leave types
- Work week
- Holidays
- Leave rules

### Leave Periods
A leave period usually a year but can be different according to company HR processes. 
Leave periods can’t overlap, which means if an employee applied for annual leaves in leave period for 
“Year 2014”, his leave balance in leave period “Year 2015” won’t get affected. This is same for all types of leaves. 
Also if the leave period for year 2015 is not defined, employees won’t be able to apply leaves for 2015.

### Leave Types

The leave type tab defines the types of leaves that can be applied by employees.

Some of the basic leave types are:
1. Annual Leaves
2. Casual Leaves
3. Medical Leaves
4. Paternity Leaves

![IceHrm Leave Types](https://icehrm.com/explore/wp-content/uploads/2022/08/Untitled-design-7.png)

### Adding a new Leave Type

When adding a leave type you need to set following fields

Basic:

![Adding a new leave type icehrm](https://icehrm.com/explore/wp-content/uploads/2022/08/Untitled-design-6.png)

Carry Forward:

![Adding a new leave type icehrm](https://icehrm.com/explore/wp-content/uploads/2022/08/Untitled-design-8.png)

Advanced:

![Adding a new leave type icehrm](https://icehrm.com/explore/wp-content/uploads/2022/08/Untitled-design-9.png)

<div class="mobile-side-scroller">
<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><p>Admin can assign leave to employees</p></td>
      <td><p>
        
        If “Yes” is selected, an Admin or a Manager is able to login as an employee (Please check switch employee concept explained in employee module) and apply this type of leaves behalf of the employee.

      </p></td>
    </tr>
    <tr>
      <td><p>Employees can apply for this leave type</p></td>
      <td><p>
       
        If “No” is selected; only an Admin or a Manager is allowed to assign this type of leave to an employee. (An employee won’t be able to apply this type of leave).
       
      </p></td>
    </tr>
    <tr>
      <td><p>Leaves per Year</p></td>
      <td><p>
        
        This is the number of leaves can be applied by an employee per year (or the current leave period). If the leave period is less than a Year this is the number of leaves for the leave period.
        
      </p></td>
    </tr>
    <tr>
      <td><p>Leave Accrue Enabled</p></td>
      <td><p>
        
        If this is set to “Yes”, employees won’t have all the leaves added to their leave balance at the beginning of the leave period. Instead leaves get accrued for every passing day in leave period. For an example if for a particular leave type number of leaves per period is defined as 24 and leave period (having 12 months) is stating from January, at the end of January an employee will be able apply for 2 leaves of this leave type (24/12)
        
      </p></td>
    </tr>
    <tr>
      <td><p>Leave Carried Forward</p></td>
      <td><p>
        
        If an employee has some leave balance remaining in previous leave period, that amount will get add to the current leave period.
        
      </p></td>
    </tr>
    <tr>
      <td><p>Percentage of Leaves Carried Forward</p></td>
      <td><p>
        
        In each year (or period) what percentage of remaining leaves should be carried forward.

      </p></td>
    </tr>
    <tr>
      <td><p>Maximum Carried Forward Amount</p></td>
      <td><p>
        
        Maximum number of leave days which can be carried forwarded from one year to another. Set to 0 for unlimited

      </p></td>
    </tr>
    <tr>
      <td><p>Carried Forward Leave Availability Period</p></td>
      <td><p>
        
        For how many days carried forward leaves are available in start date of current leave period.
      
      </p></td>
    </tr>
    <tr>
      <td><p>Proportionate Leaves on Joined Date</p></td>
      <td><p>
        
        Whether the available number of leaves should be calculated based on number of days employee work in a given leave period. (e.g if an employee joined in end of June, he/she will only get half of the number of leaves specified for given leave type. 
      
      </p></td>
    </tr>
    
  </tbody>
</table>
</div>


### Work Week

Work week defines the days that your employees are working. When an employee is applying for a leave,
work week is taken into consideration. For an example if you company works only from Monday to 
Friday and if an employee applied for a leave for two continuous weeks including weekends, Saturdays and 
Sundays will NOT be counted for leave application. 

In some cases, companies need to keep different workweeks 
for different countries. For an example if your branch in UK works a half a day on Saturday then you can 
add that as shown on following image. All the leave calculations of UK based employees (employee: 
country field should be set to UK) will be done according to extended workweek defined for UK. 

![leave management system](https://icehrm.com/explore/wp-content/uploads/2022/09/Untitled-design-10.png)

### Holidays

Holidays define the list of holidays for all leave periods. It is advised to define all holidays for all the enabled leave periods. If an employee applies for a leave that includes a holiday, the leave for holiday won’t be counted. Just like the workweek, you can have different holidays defined for different countries. In the following example, 2022-12-18 is defined as a holiday only for the UK.

![leave management system](https://icehrm.com/explore/wp-content/uploads/2022/09/Untitled-900-%C3%97-300px.png)


### Employee leaves

Employee leaves tab lists all the employee leaves. An administrator can view details of leaves and 
take actions on it (Approve or Reject). Admin should usually use this feature when the Supervisor 
of the person who applied the leave is not able to do it.

![hrm management system](https://icehrm.com/explore/wp-content/uploads/2022/09/Untitled-900-%C3%97-300px-1.png)

#### Employee Leave Entitlement

![Employee Leave Entitlement](https://icehrm.com/explore/wp-content/uploads/2022/09/Untitled-design-15.png)

All the employees are allowed to check there leave entitlement. It show a summery of their leave balances for
the current leave period.

 <div class="mobile-side-scroller">
 <table>
   <thead>
     <tr>
       <th>Field</th>
       <th>Description</th>
     </tr>
   </thead>
   <tbody>
     <tr>
       <td><p>Available Leaves</p></td>
       <td><p>
         Number of leave remaining that you can apply during current leave period
       </p></td>
     </tr>
     <tr>
       <td><p>Pending Leaves</p></td>
       <td><p>
        Number of leave you have applied but not approved or rejected
       </p></td>
     </tr>
     <tr>
       <td><p>Leaves to be Accrued </p></td>
       <td>
       <p>
         If the Leave Accrue Enabled is set for the leave type, this will show how many leave days will be added to your leave balance by end of current leave period
         
       </p>
       </td>
     </tr>
     <tr>
       <td><p>Leaves Carried Forwarded</p></td>
       <td><p>
         
         Leave days carried forward from previous leave periods
         
       </p></td>
     </tr>
     
   </tbody>
 </table>
 </div>


### Leave Groups

Leave groups can be used to:

Group a set of employees and create leave rules affecting all employees in the group.
Selectively allow some leave types only to a group of employees (for example you can assign Maternity leaves only to female employees).
In order to do this:

● First, create the leave group under <b>Manage -> Leave -> Leave Groups -> Edit Leave Groups</b>.

![leave management system](https://icehrm.com/explore/wp-content/uploads/2022/09/Untitled-design-16.png)

- Add employees to leave group

- Create a leave type for Maternity leave by specifying “Female employees group”. Now only employees added to 
that group will be able to  apply for maternity leaves


