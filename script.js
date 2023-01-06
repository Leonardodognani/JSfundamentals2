"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = 'Audio';
// const private = 534;
*/

//FUNCTIONS

/*
function logger() {
  console.log("My name is Leo");
}

// Calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");
console.log(num);
*/

//FUNCTION DECLARATION vs EXPRESSIONS

//function delaration
const age1 = calcAge1(1985); //we can call the function before the function block and still work.

function calcAge1(birthYear) {
  // const age = 2023 - birthYear;
  //return age (dont needed, instead, use this:)
  return 2023 - birthYear;
}

//function expression
// we cannot call the function before in expressions.
const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};

const age2 = calcAge2(1985);

console.log(age1, age2);
