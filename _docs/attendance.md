---
layout: docs
title: Attendance Tracking
prev_section: projects
next_section: timesheets
permalink: /docs/attendance/
---
Attendance tracking is one of the most used functions of IceHrm. When tracking attendance you can either let your
employees enter the time when recording attendance or configure it to use server time.

Also attendance module can be used to track people who are already punched in.

#### Attendance Tracking with User Time

Under <code>System -> Settings</code> set <code>Attendance: Use Department Time Zone</code> to No. This will let yours select the time when
punching in and out.

![Punch in with user time](https://icehrm.s3.amazonaws.com/images/blog-images/attendance_punch_in1.png)

#### Attendance Tracking with Server Time

Every employee should be attached to a department. These departments are defined under <code>Admin -> Company Structure</code> and
you should have a time zone for each department defined. When an employee attached to a department records attendance
icehrm uses the time in departments timezone to generate the correct time. All you need to do is setting the proper
time zone and set <code>Attendance: Use Department Time Zone</code> to Yes.

![Punch in with server time](https://icehrm.s3.amazonaws.com/images/blog-images/attendance_punch_in1.png)



