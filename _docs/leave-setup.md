---
layout: docs
title: Leave Module Setup
prev_section: leave-admin
next_section: leave-rules
permalink: /docs/leave-setup/
---

### Setting Up Leave Module

Since I've have noticed that its not a trivial task to setup the icehrm leave module initially when moving from another 
active leave management setup, I'm writing this to walk you through a short tutorial.

<div class="note info">
  <h5>Let's assume following:</h5>
  <p>
  1. You are moving the leave management system to icehrm, in the middle of the leave period for 2015<br/>
  2. Some of your employees have leaves carried forwarded from 2014, which might not have been used<br/>
  3. Your company have annual leave which can be carried forwarded to next year<br/>
  4. There are casual leave which are accrued 1.5 per each month<br/>
  5. Some employees have joined in 2015 and their leave entitlement should be proportionate according to joined date<br/>
  </p>
</div>



### Setting up leave periods

First task is setting up the leave periods. If you are starting from 2015 you only need to have the 2015 leave period.
But creating a leave period for 2016 also should not be an issue. Creating a leave period for 2014 will carry forward
what ever the remaining leaves from 2014 to 2015. In that case you have to enter all employee leave details for 2014 
manually into IceHrm. So the preferred way is to not create the previous leave period by adding all leave carried forwarded 
by employees using PTO (this will be explained in another section).


<div class="note warning">
  <h5></h5>
  <p>Also note that leave period can have different lengths and can be started from any month of the year.</p>
</div>


![Setting up leave periods](https://icehrm.s3.amazonaws.com/images/blog-images/leave-periods.png)

### Setting up leave types


1. Lets setup the leave type for annual leave which can be carried forwarded to the next year


![Setting up annual leave](https://icehrm.s3.amazonaws.com/images/blog-images/adding-annual-leave.png)

Here I've set leave carried forward to 'Yes' and carry forward percentage to 100% so all the remaining annual leave of
this year will be carried forward to the next.

2. Setting up casual leave which are accrued 1.5 per each month and should not be carried forward to the next year


![Setting up casual leave](https://icehrm.s3.amazonaws.com/images/blog-images/casual-leave-setup.png)

<div class="note info">
  <h5></h5>
  <p>
  I have entered 18 for leave amount, this will accrue 1.5 (18/12) days per month since leave period length for 2015 is 12 months
  </p>
</div>




### Employee leave entitlement

Now assume we have an employee named 'Jhon Doe'. His leave entitlement (under "Leave" => 
"Leave Management"), after above leave periods and leave types are added should look like this:

![Leave entitlement for Jhon Doe](https://icehrm.s3.amazonaws.com/images/blog-images/leave-entitlement1.png)

<div class="note info">
  <h5></h5>
  <p>
  There are 14.39 leaves accrued for this year (for the period 2015-01-01 to 2015-10-19). Also it shows the number of day
  that will be accrued till end of the year from now, which is 3.61 days
  </p>
</div>



### Adding leave balance from previous year

The other problem you will face while adopting icehrm leave management is moving leave balance from previous year in a
third party leave management system to icehrm. In order to do this you can use PTO. For an example if Jhon Doe has 3 annual
leave days remaining from 2014 (but you are not able to automatically move it to 2015 because you have not been using icehrm
in 2015), you can add a PTO days as shown below through "Admin"=>"Leave Settings"=>"PTO".


![PTO leave balance for Jhon Doe](https://icehrm.s3.amazonaws.com/images/blog-images/pto1.png)

After adding the leave balance you will notice that Jhon Doe has 17 annual leaves instead of 14 in his leave entitlement


![Leave entitlement for Jhon Doe](https://icehrm.s3.amazonaws.com/images/blog-images/leave-entitlement2.png)

### Proportioning leaves respect to joined date

Let's assume Jhon Doe joined the company in May 2015 and should not be allowed to take only a pat of leave count defined for 2015.
Then for annual leave definition under "Admin"=>"Leave Settings"=>"Leave Types" you can edit Annual Leave and make 
<code>"Proportionate leaves on Joined Date" = "Yes"</code>

If this is set then Jhon Doe will only be entitled for 18 * (8/12) annual leaves for the year given he has joined on 1st of May 2015
