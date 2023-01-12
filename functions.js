// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.

function printGreeting() {
    console.log(`😀 Have an amazing day 😀`)
}
printGreeting();
printGreeting();
printGreeting();


// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.

function nameSelector (name) {
    console.log(`Congratulation! ${name} you are a winner!`)
}
nameSelector("Linda");


// 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company, and the numbers will 
//represent the minimum and maximum of a pay range for a posted job. The function should print out a sentence that includes the
// name of the company and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).

function reportPayWages(company, minimum, maximum) {
var wageRange = maximum - minimum;
    return `Here at ${company}, we start our employees wages off at about a $${wageRange} range.`;
}
    console.log(reportPayWages("Mars", 90000 ,100000));
    console.log(reportPayWages("Disney",20000 ,70000));



// 4: Write a function that satifies the following interaction pattern:


function checkStock(quanity,storeItems) {
if (quanity ===0) {
    console.log(`${storeItems} is Out of stock!`)
}else if (quanity < 4){
    console.log(`${storeItems} is running low!`)
}else {
    console.log(`${storeItems} is in stock!`)
}
}
checkStock(4, "Coffee");
checkStock(3, "Tortillas");
checkStock(0, "Cheese");
checkStock(1, "Salsa");