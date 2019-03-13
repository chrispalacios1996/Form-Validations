"use strict";

// Makes sure that the script file is attached to the HTML file.
console.log("Script Linked");

// Create an array with characters we only accept.
var valid = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var bday;

// Makes sure the HTML file is fully loaded before we run our jQuery code.
$(document).ready( function () {

  $("#input").css({
    "border-color": "red",
    "color": "red",
    "padding": "10px",
    "border-style": "outset",
    "border-width": "10px",
    "font-size": "20px",
    "font-family": "monospace",
  })

  $("#results").css({
    "background-color": "green",
    "text-align": "center",
    "color": "yellow",
    "font-size": "30px",
  })

  $("#submit").css({
  "height": "60px",
  "width": "75px",
  "background-color": "red",
  "border-radius": "20px",
  "margin-top": "10px",
  })

  $("#div1").css({
    "text-align": "center",
  })

  $("#submit").hover(function(){
    $("#submit").css("background-color", "blue")
  })



  // Attach click listener to the submit button.
  $("#submit").click(function () {

    // When clicked, create a variable holding the value of the input text box.
    bday = $("#input").val();

    console.log("Birthday: " + bday);

    // Tests to see if birthday string is 10 characters long.
    if (bday.length == 10) {
      console.log("Birthday length is 10 characters long.");

      var currentChar;
      var invalid;

      // looping through each character of bday string.
      for (var charCounter = 0; charCounter < bday.length; charCounter++) {
        currentChar = bday.charAt(charCounter);

        console.log("Current character is: " + currentChar);

        // checking if 3rd or 6th character in the loop
        if (2 == charCounter || 5 == charCounter) {
          console.log("Current character is 3rd or 6th, must be a slash.")

          // testing to see if 3rd or 6th is a slash.
          if (currentChar == "/") {
            console.log("This character is a slash.");

            invalid = false;
          } else {
            console.log("This character is not a slash.");
            invalid = true;
            break;
          }

        } else {

          // Loop through each item in the array and compare it to the current character.
          for (var arrayCounter = 0; arrayCounter < valid.length ; arrayCounter = arrayCounter + 1) {
            console.log("Comparing " + currentChar + " to " + valid[arrayCounter]);
            if ( valid[arrayCounter] == currentChar) {
              invalid = false;
              break;
            } else {
              invalid = true;
            }
          }

        }

      }

      // Print out if string is valid or invalid.
      if (!invalid) {
        $("#results").html(bday + " birthday is valid.");
      } else {
        $("#results").html("birthday is invalid");
      }

    } else {
      // Print out that the string is too long or to short.
      $("#results").html("This is not a valid birthday because it's too long.");
    }

  });

});
