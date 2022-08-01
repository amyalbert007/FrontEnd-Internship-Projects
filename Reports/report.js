$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/BusTicketBooking.feature");
formatter.feature({
  "name": "Bus Ticket Booking feature",
  "description": "This feature will test bus ticket booking feature from a given source to destination.",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User wants to book bus ticket from a given source to destinaation",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should open Bus Online Ticket Website",
  "keyword": "Given "
});
formatter.match({
  "location": "com.busticketbooking.stepdef.BusTicketBookingStepDef.user_should_open_Google_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User entered Source and Destination of the journey",
  "keyword": "When "
});
formatter.match({
  "location": "com.busticketbooking.stepdef.BusTicketBookingStepDef.User_entered_Source_and_Destination_of_the_journey()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User entered date of journey and clicked on search bus button",
  "keyword": "When "
});
formatter.match({
  "location": "com.busticketbooking.stepdef.BusTicketBookingStepDef.User_entered_date_of_journey_and_clicked_on_search_bus_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User checks for minimum price and clicks on select button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.busticketbooking.stepdef.BusTicketBookingStepDef.User_checks_for_minimum_price_and_clicks_on_select_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects seats and clicks on proceed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.busticketbooking.stepdef.BusTicketBookingStepDef.user_select_seats_and_click_on_proceed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters all the personal details",
  "keyword": "And "
});
formatter.match({
  "location": "com.busticketbooking.stepdef.BusTicketBookingStepDef.user_enters_all_personal_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that user is on payment page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.busticketbooking.stepdef.BusTicketBookingStepDef.verify_that_user_is_on_payment_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cilcks on proceed to payment button and checks for alert popup",
  "keyword": "Then "
});
formatter.match({
  "location": "com.busticketbooking.stepdef.BusTicketBookingStepDef.user_clicks_on_proceed_to_payment_button_and_checks_for_alert_popup()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});