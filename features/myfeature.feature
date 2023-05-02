Feature: Login okta

Scenario: Valid login okta 
Given I visit Lennar homepage
When Type your email:
And Click on the Next button
And Type your password: *******
And Click on the Verify button
Then Validate the login success 

Scenario: Access to Application 
Given Access to Application
Then Validate the Application 