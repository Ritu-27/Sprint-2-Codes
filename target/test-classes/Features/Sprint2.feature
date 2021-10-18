Feature: Automation Testing for Uniformstore Manufacturers Page

  Background: Automate the login page 
    Given Admin is on login page of uniformstore application
    When Admin enters the username "admin" and password "admin@123"
    And Clicks on login button
    Then Admin navigates to the dashboard page of the uniformstore
    When Admin clicks on the Catalog option
    And Admin clicks on the Manufacturers option
    Then Admin navigates to the Manufacturers page


  Scenario Outline: Automate the Add New button on the Manufacturers Page
    Given Admin is on the Manufacturers page
    When Admin clicks on the Add New button
    Then Admin navigates to the Add Manufacturers page
    When Admin enters the "<name>" in the Manufacturers name field
    And checks that Stores field is default checked or not
    And enters the "<sortorder>" in the sort order field
    And clicks on the Save button
    Then Admin will able to see the validationmessage

    Examples: 
      | name     | sortorder |
      | abc      |        90 |
      | xyz1     | 6abc      |
      | ritu@32  | abc32     |
      | abc abcd |        42 |
      |          |           |
      | r        |        32 |
      
      
 
  Scenario Outline: Automate the Image Manager page
    Given Admin is on the Manufacturers page
    When Admin clicks on the Add New button
    Then Admin navigates to the Add Manufacturers page
    When Admin clicks on the Image field
    And clicks on the Edit icon
    Then Admin navigates to the Image Manager page
    And clicks on the Refresh button
    When Admin clicks on the New Folder icon
    And Enters the foldername "<name1>"
    And Clicks on the Add icon
    Then Admin accepts the alert
    When Admin enters the foldername or imagename "<name1>" in the search field
    And clicks on the search icon
    Then Admin able to see the searched folder or image on the page
    And clicks on the Parent button to return to the parent page
    When Admin selects the foldername or imagename
    And clicks on Delete button
    And accepts the alert
    Then Admin Again accepts the success alert
    When Admin checks for the pagination
    And Clicks on the forward arrow of pagination
    Then Admin navigates to the next page of the Image Manager
    And Clicks on the backward arrow of pagination
    Then Admin navigates to the previous page of the Image Manager

    Examples: 
      | name1  |
      | Blazer |

 
  Scenario: Automate the Sorting functionality on the Manufacturers page
    Given Admin is on the Manufacturers page
    When Admin clicks on the Manufacturers name heading
    Then Names should be arranges in descending order
    And Again clicks on the Manufacturers name heading
    Then Names should be arranges in ascending order
    When Admin clicks Sort Order heading
    Then Order should be arranges in descending order
    And Again clicks on the Sort Order heading
    Then Order should be arranges in ascending order

  
  Scenario Outline: Automate the Edit button and Save button on the Manufacturers page
    Given Admin is on the Manufacturers page
    When Admin clicks on the Edit icon
    Then Admin navigates to the Edit Manufacturers page
    When Admin modifies the "<name>","<sortorder>"
    And clicks on the Save button
    Then Admin will able to see the validationmessage

    Examples: 
      | name    | sortorder |
      | ritu@32 |         3 |
      |         |           |

  
  Scenario: Automate the cancel button on the Add Manufacturers page
    Given Admin is on the Manufacturers page
    When Admin clicks on the Add New button
    Then Admin navigates to the Add Manufacturers page
    When Clicks on the cancel button
    Then Admin navigates back to the Manufacturers page

 
  Scenario: Automate the Pagination functionality on the Manufacturers page
    Given Admin is on the Manufacturers page
    And Checks for the pagination
    When Admin clicks on the forward arrow
    Then Admin navigates to the next page
    And Clicks on the backward arrow
    Then Admin navigates to the previous page

 
  Scenario: Automate the Bulk action and Delete button on the Manufacturers page
    Given Admin is on the Manufacturers page
    When Admin clicks on the checkbox in the title bar and all checkboxes should be selected
    And Again clicks on the checkbox in the title bar and all checkboxes should be deselected
    When Admin clicks on one or more checkboxes in the Manufacturers list
    Then Checkboxes should be selected
    And Clicks on the delete button
    And Accepts the alert
    Then Admin will able to see the validation message of Modification
