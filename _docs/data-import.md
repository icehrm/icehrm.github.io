---
layout: docs
title: Importing Employee Data Into IceHrm
prev_section: employees
next_section: jobdetails
permalink: /docs/data-import/
---

You can import data into icehrm using CSV files. By default we support importing basic employee details and attendance data.

### Preparing Employee Data for Upload

1. Download sample data file <a href="https://s3.amazonaws.com/icehrm/images/blog-files/employees.csv" target="_blank">here</a>
2. The file has following columns which matches with default employee data file definition

    - employee_id = The id of the employee (this id should be unique, if the employee with same id exists in the system then employee details will be replaced)
    - first_name, middle_name, last_name = Employee names
    - address1,address2,home_phone,mobile_phone,work_email = Employee contact details





### Importing Basic Employee Data

1. Login as Admin and Navigate to
3. Create a pull request comparing icehrm master with a branch on your repo
4. Submit the pull request
5. Someone from IceHrm team will review and merge your pull request