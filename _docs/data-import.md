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
    - gender = Male or Female
    - marital_status = Married, Single, Divorced, Widowed, Other
    - birthday = MM/DD/YY format
    - Nationality/nationality = Any nationality defined in System -> Manage Meta Data -> Nationality
    - Ethnicity/ethnicity = Any ethnicity defined under System -> Manage Meta Data -> Ethnicity
    - EmergencyContact/name = Emergency contact name
    - EmergencyContact/relationship = Emergency contact relationship
    - EmergencyContact/home_phone = Emergency contact phone
    - ssn_num = Social security number or ID number
    - job_title = Job Title (this should be predefined in Admin -> Job Details Setup -> Job Titles)
    - employment_status = Employment Status (should be predefined in Admin -> Job Details Setup -> Employment Status)
    - joined_date = Joined date in MM/DD/YY format
    - department = Company Structure this employee is attached to (predefined in Admin -> Company Structure)


### Importing Basic Employee Data

1. Login as Admin and Navigate to System -> Data Import Files and create a new entry with file created in previous step
![Create data import file](https://s3.amazonaws.com/icehrm/images/blog-images/create_employee_data_import.png)
2. Once the entry is created click on "Process"
![Process data import file](https://s3.amazonaws.com/icehrm/images/blog-images/process_employee_data_import.png)