Feature: Title of your feature
  I want to use this template for my feature file

  Background: 
    Given launch and direct to url
    When click the add customer

  @tag1
  Scenario: customer
    When enter the details and submit
      | fname  | lname | email        | add       | pho     |
      | sudhar | san   | adhdv@dh.com | hkfbvsakh | 5845845 |
      | sudhar | san   | adhdv@dh.com | hkfbvsakh | 5845845 |
    Then generate a id

  @tag
  Scenario: customer1
    When enter the details and submit
      | fname  | lname | email        | add       | pho     |
      | sudhar | san   | adhdv@dh.com | hkfbvsakh | 5845845 |
      | sudhar | san   | adhdv@dh.com | hkfbvsakh | 5845845 |
    Then generate a id
