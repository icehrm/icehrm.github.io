---
layout: docs
title: Attendance Tracking
prev_section: projects
next_section: timesheets
permalink: /docs/attendance/
---

Employees can record attendance via Time Management -> Attendance. While recording attendance they can select the time they arrive and leave the office.

When tracking attendance you can either let your employees enter the time when recording attendance or configure it to use server time.

#### Attendance Tracking with User Time

Under <code>System -> Settings</code> set <code>Attendance: Use Department Time Zone</code> to No. This will let yours select the time when
punching in and out.

![Punch in with user time](https://icehrm.com/explore/wp-content/uploads/2022/09/Untitled-design-72.png)

#### Attendance Tracking with Server Time

Every employee should be attached to a department. These departments are defined under <code>Admin -> Company Structure</code> and
you should have a time zone for each department defined. When an employee attached to a department records attendance
icehrm uses the time in departments timezone to generate the correct time. All you need to do is setting the proper
time zone and set <code>Attendance: Use Department Time Zone</code> to Yes.

![Punch in with server time](https://icehrm.com/explore/wp-content/uploads/2022/09/Untitled-design-73.png)
