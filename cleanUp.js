// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function nameQuestion() {
  console.log("Hello, what is your name?");
}

nameQuestion()
//Added semicolon to line 12 after the code block.

// EX 2:
function addThreeNums(first, second, third) {
var sum = first + second + third;
console.log(sum);
}

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);
// Line 21 lined up curly bracket with function on line 19. Added semicolon end on line 20.

// EX 3:
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");   
 }

makeFreshPesto();

//Line 29 completed phrase function and added a space between parenthesis and curly brackets. 
//Line 34 dropped curly bracket to next line and alinged with funtion.

//  EX 4:
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;
  console.log(`the average is: ${avg}.`);
}

average(5,5);
  //Line 48 moved the dot inside of the `. Line 43 moved back to previous line positioned a 
  //space away from parenthesis. Moved curly bracket to line 48 and aligned it with function. 
  // Line 46 lined up the variables. Line 47 added semicolon. Added the argument to 
  //line 49 so code could function. 