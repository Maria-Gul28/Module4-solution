// ******************************* 
// START HERE IF YOU WANT AN EASIER STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

WARNING!!! WARNING!!!
The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this
assignment.
WARNING!!! WARNING!!!

*/

// STEP 1: (NOTHING TO DO. ALREADY DONE FOR YOU)
// Wrap the entire contents of script.js inside of an IIFE
// See Lecture 52, part 2
// (Note, Step 2 will be done in the SpeakHello.js file.)
document.addEventListener("DOMContentLoaded", function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // Get the element where we want to output the names
  var outputElement = document.getElementById("output-names");

  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    var nameOutput;

    if (firstLetter === 'j') {
      nameOutput = "Good Bye " + names[i];
    } else {
      nameOutput = "Hello " + names[i];
    }

    // Create a new paragraph element for each name
    var paragraphElement = document.createElement("p");
    paragraphElement.textContent = nameOutput;

    // Append the paragraph element to the output element
    outputElement.appendChild(paragraphElement);
  }
});
