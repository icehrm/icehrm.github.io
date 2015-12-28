---
layout: docs
title: Document Management
prev_section: timesheets
next_section: leave-admin
permalink: /docs/documents/
---

### Document Types

Document Types tab is used to define various documents relevant to your organization. 
The employees are able to upload documents under these categories.

### Expire Notifications

When defining document types you can define before how many days icehrm should notify the user about the
expiring documents.

<div class="note info">
  <p>
  The notification cron should be setup for this feature to function properly. Please check 
  [scheduler](/docs/scheduler)
  </p>
</div>

### Employee Documents

Administrators and Managers can use "Employee Documents" tab to explore and manage documents uploaded by 
employees or add new documents to employees.

### Settings

Set <code>Notifications: Send Document Expiry Emails</code> to No if you don't wish to receive document expiry
notifications.

Also set <code>Notifications: Copy Document Expiry Emails to Manager</code> to Yes if you want to send all document
expiry notifications to respective managers also

