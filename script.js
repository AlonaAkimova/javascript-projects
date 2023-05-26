"use strict";
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1990);
console.log(age1);

const calcAge3 = (birthYear) => 2037 - birthYear;

console.log(calcAge3(1991));
const yearsUntilRetirement = (birthYear) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
};
console.log(yearsUntilRetirement(1991));
