The Mega Sandbox
====================

* Provides mock data for Total Logins, Tool Access (org and course level), Course Access, Course Overview Widget, and Class Engagement.
* In some cases, org unit IDs, role IDs, and user IDs are hard coded to match default data that comes with UAT site deployments. Class Engagement will only work with "Course" (orgID 6609, >300 students) and "Course2" (orgID 6613, 2 students). Other reports and widget work with any course.
* Update consts.js and utils.js if using this sandbox in another environment or if you want to test using different courses, students, or roles

# Steps to get up and running:
* Copy this repo to your github account, then sync it with a sandbox in your getsandbox account
* Set up your LE instance according to the instructions here: http://docs.dev.d2l/index.php/Guide_to_Testing_Analytics_Applications#LE_Setup_and_Configuration_Steps
* Run the SQL found here: http://docs.dev.d2l/index.php/Sandbox_Mock_API_for_Insights#The_Mega_Sandbox against the main database of your instance, substituting its name for "foulball" in all locations
