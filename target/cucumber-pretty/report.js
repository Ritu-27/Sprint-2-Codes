$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Features/Sprint2.feature");
formatter.feature({
  "name": "Automation Testing for Uniformstore Manufacturers Page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Automate the Add New button on the Manufacturers Page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Admin is on the Manufacturers page",
  "keyword": "Given "
});
formatter.step({
  "name": "Admin clicks on the Add New button",
  "keyword": "When "
});
formatter.step({
  "name": "Admin navigates to the Add Manufacturers page",
  "keyword": "Then "
});
formatter.step({
  "name": "Admin enters the \"\u003cname\u003e\" in the Manufacturers name field",
  "keyword": "When "
});
formatter.step({
  "name": "checks that Stores field is default checked or not",
  "keyword": "And "
});
formatter.step({
  "name": "enters the \"\u003csortorder\u003e\" in the sort order field",
  "keyword": "And "
});
formatter.step({
  "name": "clicks on the Save button",
  "keyword": "And "
});
formatter.step({
  "name": "Admin will able to see the validationmessage",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "sortorder"
      ]
    },
    {
      "cells": [
        "abc",
        "90"
      ]
    },
    {
      "cells": [
        "xyz1",
        "6abc"
      ]
    },
    {
      "cells": [
        "ritu@32",
        "abc32"
      ]
    },
    {
      "cells": [
        "abc abcd",
        "42"
      ]
    },
    {
      "cells": [
        "",
        ""
      ]
    },
    {
      "cells": [
        "r",
        "32"
      ]
    }
  ]
});
formatter.background({
  "name": "Automate the login page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on login page of uniformstore application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination1.admin_is_on_login_page_of_uniformstore_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters the username and password",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_enters_the_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the dashboard page of the uniformstore",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_to_the_dashboard_page_of_the_uniformstore()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Catalog option",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_the_Catalog_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Manufacturers option",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_the_Manufacturers_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the Manufacturers page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_to_the_Manufacturers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Automate the Add New button on the Manufacturers Page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Admin is on the Manufacturers page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination1.admin_is_on_the_Manufacturers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Add New button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_the_Add_New_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the Add Manufacturers page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_to_the_Add_Manufacturers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters the \"abc\" in the Manufacturers name field",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_enters_the_in_the_Manufacturers_name_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "checks that Stores field is default checked or not",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.checks_that_Stores_field_is_default_checked_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters the \"90\" in the sort order field",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.enters_the_in_the_sort_order_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on the Save button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.clicks_on_the_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin will able to see the validationmessage",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_will_able_to_see_the_validationmessage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Automate the login page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on login page of uniformstore application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination1.admin_is_on_login_page_of_uniformstore_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters the username and password",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_enters_the_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the dashboard page of the uniformstore",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_to_the_dashboard_page_of_the_uniformstore()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Catalog option",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_the_Catalog_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Manufacturers option",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_the_Manufacturers_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the Manufacturers page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_to_the_Manufacturers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Automate the Add New button on the Manufacturers Page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Admin is on the Manufacturers page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination1.admin_is_on_the_Manufacturers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Add New button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_the_Add_New_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the Add Manufacturers page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_to_the_Add_Manufacturers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters the \"xyz1\" in the Manufacturers name field",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_enters_the_in_the_Manufacturers_name_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "checks that Stores field is default checked or not",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.checks_that_Stores_field_is_default_checked_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters the \"6abc\" in the sort order field",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.enters_the_in_the_sort_order_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on the Save button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.clicks_on_the_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin will able to see the validationmessage",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_will_able_to_see_the_validationmessage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Automate the login page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on login page of uniformstore application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination1.admin_is_on_login_page_of_uniformstore_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters the username and password",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_enters_the_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the dashboard page of the uniformstore",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_to_the_dashboard_page_of_the_uniformstore()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Catalog option",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_the_Catalog_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Manufacturers option",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_the_Manufacturers_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the Manufacturers page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_to_the_Manufacturers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Automate the Add New button on the Manufacturers Page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Admin is on the Manufacturers page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination1.admin_is_on_the_Manufacturers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Add New button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_the_Add_New_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the Add Manufacturers page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_to_the_Add_Manufacturers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters the \"ritu@32\" in the Manufacturers name field",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_enters_the_in_the_Manufacturers_name_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "checks that Stores field is default checked or not",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.checks_that_Stores_field_is_default_checked_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters the \"abc32\" in the sort order field",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.enters_the_in_the_sort_order_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on the Save button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.clicks_on_the_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin will able to see the validationmessage",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_will_able_to_see_the_validationmessage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Automate the login page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on login page of uniformstore application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination1.admin_is_on_login_page_of_uniformstore_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters the username and password",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_enters_the_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the dashboard page of the uniformstore",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_to_the_dashboard_page_of_the_uniformstore()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Catalog option",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_the_Catalog_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Manufacturers option",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_the_Manufacturers_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the Manufacturers page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_to_the_Manufacturers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Automate the Add New button on the Manufacturers Page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Admin is on the Manufacturers page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination1.admin_is_on_the_Manufacturers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Add New button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_the_Add_New_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the Add Manufacturers page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_to_the_Add_Manufacturers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters the \"abc abcd\" in the Manufacturers name field",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_enters_the_in_the_Manufacturers_name_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "checks that Stores field is default checked or not",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.checks_that_Stores_field_is_default_checked_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters the \"42\" in the sort order field",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.enters_the_in_the_sort_order_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on the Save button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.clicks_on_the_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin will able to see the validationmessage",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_will_able_to_see_the_validationmessage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Automate the login page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on login page of uniformstore application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination1.admin_is_on_login_page_of_uniformstore_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters the username and password",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_enters_the_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the dashboard page of the uniformstore",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_to_the_dashboard_page_of_the_uniformstore()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Catalog option",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_the_Catalog_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Manufacturers option",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_the_Manufacturers_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the Manufacturers page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_to_the_Manufacturers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Automate the Add New button on the Manufacturers Page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Admin is on the Manufacturers page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination1.admin_is_on_the_Manufacturers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Add New button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_the_Add_New_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the Add Manufacturers page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_to_the_Add_Manufacturers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters the \"\" in the Manufacturers name field",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_enters_the_in_the_Manufacturers_name_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "checks that Stores field is default checked or not",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.checks_that_Stores_field_is_default_checked_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters the \"\" in the sort order field",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.enters_the_in_the_sort_order_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on the Save button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.clicks_on_the_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin will able to see the validationmessage",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_will_able_to_see_the_validationmessage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Automate the login page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on login page of uniformstore application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination1.admin_is_on_login_page_of_uniformstore_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters the username and password",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_enters_the_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the dashboard page of the uniformstore",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_to_the_dashboard_page_of_the_uniformstore()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Catalog option",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_the_Catalog_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Manufacturers option",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_the_Manufacturers_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the Manufacturers page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_to_the_Manufacturers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Automate the Add New button on the Manufacturers Page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Admin is on the Manufacturers page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination1.admin_is_on_the_Manufacturers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Add New button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_the_Add_New_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the Add Manufacturers page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_to_the_Add_Manufacturers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters the \"r\" in the Manufacturers name field",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_enters_the_in_the_Manufacturers_name_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "checks that Stores field is default checked or not",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.checks_that_Stores_field_is_default_checked_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters the \"32\" in the sort order field",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.enters_the_in_the_sort_order_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on the Save button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.clicks_on_the_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin will able to see the validationmessage",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_will_able_to_see_the_validationmessage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Automate the Image Manager page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Admin is on the Manufacturers page",
  "keyword": "Given "
});
formatter.step({
  "name": "Admin clicks on the Add New button",
  "keyword": "When "
});
formatter.step({
  "name": "Admin navigates to the Add Manufacturers page",
  "keyword": "Then "
});
formatter.step({
  "name": "Admin clicks on the Image field",
  "keyword": "When "
});
formatter.step({
  "name": "clicks on the Edit icon",
  "keyword": "And "
});
formatter.step({
  "name": "Admin navigates to the Image Manager page",
  "keyword": "Then "
});
formatter.step({
  "name": "clicks on the Refresh button",
  "keyword": "And "
});
formatter.step({
  "name": "Admin clicks on the New Folder icon",
  "keyword": "When "
});
formatter.step({
  "name": "Enters the foldername \"\u003cname1\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Clicks on the Add icon",
  "keyword": "And "
});
formatter.step({
  "name": "Admin accepts the alert",
  "keyword": "Then "
});
formatter.step({
  "name": "Admin enters the foldername or imagename \"\u003cname1\u003e\" in the search field",
  "keyword": "When "
});
formatter.step({
  "name": "clicks on the search icon",
  "keyword": "And "
});
formatter.step({
  "name": "Admin able to see the searched folder or image on the page",
  "keyword": "Then "
});
formatter.step({
  "name": "clicks on the Parent button to return to the parent page",
  "keyword": "And "
});
formatter.step({
  "name": "Admin selects the foldername or imagename",
  "keyword": "When "
});
formatter.step({
  "name": "clicks on Delete button",
  "keyword": "And "
});
formatter.step({
  "name": "accepts the alert",
  "keyword": "And "
});
formatter.step({
  "name": "Admin Again accepts the success alert",
  "keyword": "Then "
});
formatter.step({
  "name": "Admin checks for the pagination",
  "keyword": "When "
});
formatter.step({
  "name": "Clicks on the forward arrow of pagination",
  "keyword": "And "
});
formatter.step({
  "name": "Admin navigates to the next page of the Image Manager",
  "keyword": "Then "
});
formatter.step({
  "name": "Clicks on the backward arrow of pagination",
  "keyword": "And "
});
formatter.step({
  "name": "Admin navigates to the previous page of the Image Manager",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name1"
      ]
    },
    {
      "cells": [
        "Blazer"
      ]
    }
  ]
});
formatter.background({
  "name": "Automate the login page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on login page of uniformstore application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination1.admin_is_on_login_page_of_uniformstore_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters the username and password",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_enters_the_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the dashboard page of the uniformstore",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_to_the_dashboard_page_of_the_uniformstore()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Catalog option",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_the_Catalog_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Manufacturers option",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_the_Manufacturers_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the Manufacturers page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_to_the_Manufacturers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Automate the Image Manager page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Admin is on the Manufacturers page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination1.admin_is_on_the_Manufacturers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Add New button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_the_Add_New_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the Add Manufacturers page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_to_the_Add_Manufacturers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Image field",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_the_Image_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on the Edit icon",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.clicks_on_the_Edit_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the Image Manager page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_to_the_Image_Manager_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on the Refresh button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.clicks_on_the_Refresh_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the New Folder icon",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_the_New_Folder_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enters the foldername \"Blazer\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.enters_the_foldername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on the Add icon",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.clicks_on_the_Add_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin accepts the alert",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_accepts_the_alert()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters the foldername or imagename \"Blazer\" in the search field",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_enters_the_foldername_or_imagename_in_the_search_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on the search icon",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.clicks_on_the_search_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin able to see the searched folder or image on the page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_able_to_see_the_searched_folder_or_image_on_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on the Parent button to return to the parent page",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.clicks_on_the_Parent_button_to_return_to_the_parent_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin selects the foldername or imagename",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_selects_the_foldername_or_imagename()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Delete button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.clicks_on_Delete_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "accepts the alert",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.accepts_the_alert1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin Again accepts the success alert",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_Again_accepts_the_success_alert()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin checks for the pagination",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_checks_for_the_pagination()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on the forward arrow of pagination",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.clicks_on_the_forward_arrow_of_pagination()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the next page of the Image Manager",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_to_the_next_page_of_the_Image_Manager()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on the backward arrow of pagination",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.clicks_on_the_backward_arrow_of_pagination()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the previous page of the Image Manager",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_to_the_previous_page_of_the_Image_Manager()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Automate the login page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on login page of uniformstore application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination1.admin_is_on_login_page_of_uniformstore_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters the username and password",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_enters_the_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the dashboard page of the uniformstore",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_to_the_dashboard_page_of_the_uniformstore()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Catalog option",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_the_Catalog_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Manufacturers option",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_the_Manufacturers_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the Manufacturers page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_to_the_Manufacturers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Automate the Sorting functionality on the Manufacturers page",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Admin is on the Manufacturers page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination1.admin_is_on_the_Manufacturers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Manufacturers name heading",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_the_Manufacturers_name_heading()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Names should be arranges in descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.names_should_be_arranges_in_descending_order1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Again clicks on the Manufacturers name heading",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.again_clicks_on_the_Manufacturers_name_heading()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Names should be arranges in ascending order",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.names_should_be_arranges_in_ascending_order()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks Sort Order heading",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_Sort_Order_heading()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Order should be arranges in descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.order_should_be_arranges_in_descending_order1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Again clicks on the Sort Order heading",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.again_clicks_on_the_Sort_Order_heading()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Order should be arranges in ascending order",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.order_should_be_arranges_in_ascending_order()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Automate the Edit button and Save button on the Manufacturers page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Admin is on the Manufacturers page",
  "keyword": "Given "
});
formatter.step({
  "name": "Admin clicks on the Edit icon",
  "keyword": "When "
});
formatter.step({
  "name": "Admin navigates to the Edit Manufacturers page",
  "keyword": "Then "
});
formatter.step({
  "name": "Admin modifies the \"\u003cname\u003e\",\"\u003csortorder\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "clicks on the Save button",
  "keyword": "And "
});
formatter.step({
  "name": "Admin will able to see the validationmessage",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "sortorder"
      ]
    },
    {
      "cells": [
        "ritu@32",
        "3"
      ]
    },
    {
      "cells": [
        "",
        ""
      ]
    }
  ]
});
formatter.background({
  "name": "Automate the login page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on login page of uniformstore application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination1.admin_is_on_login_page_of_uniformstore_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters the username and password",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_enters_the_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the dashboard page of the uniformstore",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_to_the_dashboard_page_of_the_uniformstore()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Catalog option",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_the_Catalog_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Manufacturers option",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_the_Manufacturers_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the Manufacturers page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_to_the_Manufacturers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Automate the Edit button and Save button on the Manufacturers page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Admin is on the Manufacturers page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination1.admin_is_on_the_Manufacturers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Edit icon",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_the_Edit_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the Edit Manufacturers page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_to_the_Edit_Manufacturers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin modifies the \"ritu@32\",\"3\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_modifies_the(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on the Save button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.clicks_on_the_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin will able to see the validationmessage",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_will_able_to_see_the_validationmessage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Automate the login page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on login page of uniformstore application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination1.admin_is_on_login_page_of_uniformstore_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters the username and password",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_enters_the_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the dashboard page of the uniformstore",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_to_the_dashboard_page_of_the_uniformstore()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Catalog option",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_the_Catalog_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Manufacturers option",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_the_Manufacturers_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the Manufacturers page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_to_the_Manufacturers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Automate the Edit button and Save button on the Manufacturers page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Admin is on the Manufacturers page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination1.admin_is_on_the_Manufacturers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Edit icon",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_the_Edit_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the Edit Manufacturers page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_to_the_Edit_Manufacturers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin modifies the \"\",\"\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_modifies_the(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on the Save button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.clicks_on_the_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin will able to see the validationmessage",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_will_able_to_see_the_validationmessage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Automate the login page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on login page of uniformstore application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination1.admin_is_on_login_page_of_uniformstore_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters the username and password",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_enters_the_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the dashboard page of the uniformstore",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_to_the_dashboard_page_of_the_uniformstore()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Catalog option",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_the_Catalog_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Manufacturers option",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_the_Manufacturers_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the Manufacturers page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_to_the_Manufacturers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Automate the cancel button on the Add Manufacturers page",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Admin is on the Manufacturers page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination1.admin_is_on_the_Manufacturers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Add New button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_the_Add_New_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the Add Manufacturers page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_to_the_Add_Manufacturers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on the cancel button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.clicks_on_the_cancel_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates back to the Manufacturers page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_back_to_the_Manufacturers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Automate the login page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on login page of uniformstore application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination1.admin_is_on_login_page_of_uniformstore_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters the username and password",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_enters_the_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the dashboard page of the uniformstore",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_to_the_dashboard_page_of_the_uniformstore()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Catalog option",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_the_Catalog_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Manufacturers option",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_the_Manufacturers_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the Manufacturers page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_to_the_Manufacturers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Automate the Pagination functionality on the Manufacturers page",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Admin is on the Manufacturers page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination1.admin_is_on_the_Manufacturers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Checks for the pagination",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.checks_for_the_pagination()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the forward arrow",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_the_forward_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the next page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_to_the_next_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on the backward arrow",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.clicks_on_the_backward_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the previous page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_to_the_previous_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Automate the login page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on login page of uniformstore application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination1.admin_is_on_login_page_of_uniformstore_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters the username and password",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_enters_the_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the dashboard page of the uniformstore",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_to_the_dashboard_page_of_the_uniformstore()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Catalog option",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_the_Catalog_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Manufacturers option",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_the_Manufacturers_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the Manufacturers page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_navigates_to_the_Manufacturers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Automate the Bulk action and Delete button on the Manufacturers page",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Admin is on the Manufacturers page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination1.admin_is_on_the_Manufacturers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the checkbox in the title bar and all checkboxes should be selected",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_the_checkbox_in_the_title_bar_and_all_checkboxes_should_be_selected()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Again clicks on the checkbox in the title bar and all checkboxes should be deselected",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.again_clicks_on_the_checkbox_in_the_title_bar_and_all_checkboxes_should_be_deselected()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on one or more checkboxes in the Manufacturers list",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination1.admin_clicks_on_one_or_more_checkboxes_in_the_Manufacturers_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Checkboxes should be selected",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.checkboxes_should_be_selected()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on the delete button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.clicks_on_the_delete_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Accepts the alert",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.accepts_the_alert()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin will able to see the validation message of Modification",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination1.admin_will_able_to_see_the_validation_message_of_Modification()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});