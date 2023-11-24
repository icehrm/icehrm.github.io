---
layout: docs
title: Leave Module Setup
prev_section: leave-admin
next_section: leave-rules
permalink: /docs/leave-setup/
---

#### Setting Up Leave Module

Since I've have noticed that its not a trivial task to setup the icehrm leave module initially when moving from another 
active leave management setup, I'm writing this to walk you through a short tutorial.

<div class="note info">
  <h5>Let's assume following:</h5>
  <p>
1. You are moving the leave management system to icehrm, in the middle of the leave period for 2022.<br/>
2. Some of your employees have leaves carried forward from 2021, which might not have been used.<br/>
3. Your company has annual leave which can be carried forward to next year.<br/>
4. There are casual leaves that are accrued 1.5 per month.<br/>
5. Some employees joined in 2022 and their leave entitlement should be proportionate according to joined date.<br/>
  </p>
</div>



#### Setting up leave periods

The first task is setting up the leave periods. If you are starting from 2022 you only need to have the 2022 leave period. But creating a leave period for 2023 also should not be an issue. Creating a leave period for 2021 will carry forward whatever the remaining leaves from 2021 to 2022. In that case, you have to enter all employee leave details for 2021 manually into IceHrm. So the preferred way is to not create the previous leave period by adding all leave carried forwarded by employees using PTO (this will be explained in another section).


<div class="note warning">
  <h5></h5>
  <p>Also note that leave period can have different lengths and can be started from any month of the year.</p>
</div>


![Setting up leave periods](https://icehrm.com/explore/wp-content/uploads/2022/09/Untitled-900-%C3%97-300px-2.png)

#### Setting up leave types


1. Lets setup the leave type for annual leave which can be carried forwarded to the next year

Basic:

![Setting up annual leave](https://icehrm.com/explore/wp-content/uploads/2022/09/Untitled-design-17.png)

Carry Forward:

![Setting up annual leave](https://icehrm.com/explore/wp-content/uploads/2022/09/Untitled-design-18.png)

Advanced:

![Setting up annual leave](https://icehrm.com/explore/wp-content/uploads/2022/09/Untitled-design-19.png)

Here I've set leave carried forward to 'Yes' and carry forward percentage to 100% so all the remaining annual leave of
this year will be carried forward to the next.

2. Setting up casual leave which are accrued 1.5 per each month and should not be carried forward to the next year

Basic:

![Setting up casual leave](https://icehrm.com/explore/wp-content/uploads/2022/09/Untitled-design-20.png)

Carry Forward:

![Setting up casual leave](https://icehrm.com/explore/wp-content/uploads/2022/09/Untitled-design-21.png)

Advanced:

![Setting up casual leave](https://icehrm.com/explore/wp-content/uploads/2022/09/Untitled-design-22.png)

<div class="note info">
  <h5></h5>
  <p>
  I have entered 18 for leave amount, this will accrue 1.5 (18/12) days per month since the leave period length for 2022 is 12 months.
  </p>
</div>

#### Employee leave entitlement

Now assume we have an employee named ‘Melba Dowling’. Her leave entitlement (under “Leave” => “Leave Management”), after the above leave periods and leave types are added should look like this:

![Leave entitlement](https://icehrm.com/explore/wp-content/uploads/2022/09/Untitled-design-23.png)

<div class="note info">
  <h5></h5>
  <p>
  There are 3 leaves accrued for this year (for the period 2022-01-01 to 2022-02-10).
  </p>
</div>

#### Adding leave balance from previous year

The other problem you will face while adopting Icehrm leave management is moving leave balance from the previous year in a third-party leave management system to Icehrm. In order to do this, you can use PTO. For example, if Melba Dowling has 3 annual leave days remaining from 2021 (but you are not able to automatically move it to 2022 because you have not been using Icehrm in 2021), you can add PTO days as shown below through Manage=>Leave =>Paid Time Off.


![PTO leave balance](https://icehrm.com/explore/wp-content/uploads/2022/09/Untitled-900-%C3%97-300px-3.png)

After adding the leave balance you will notice that Melba Dowling has 17 annual leaves instead of 14 in her leave entitlement.

Also, you may add negative leave balances under PTO for the current year to reflect already taken leaves by employees.

![Leave entitlement](https://icehrm.com/explore/wp-content/uploads/2022/09/Untitled-design-24.png)

#### Proportioning leaves respect to joined date

Let’s assume Melba Dowling joined the company in May 2022 and should not be allowed to take only a pat of leave count defined for 2022. Then for the annual leave definition under Manage ->Leave ->Leave Types you can edit Annual Leave and make “Proportionate leaves on Joined date” = “YES”.

If this is set then Melba Dowling will only be entitled to 18 * (8/12) annual leaves for the year given he has joined on the 1st of May 2022
