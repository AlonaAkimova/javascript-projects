"use strict";

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }
// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAverage = (a, b, c) => Math.floor(a + b + c / 3);
// const averageDolphins = calcAverage(44, 23, 71);
// const averageKoalas = calcAverage(65, 54, 49);

// console.log(averageDolphins, averageKoalas);

// const checkWinner = function (averageDolphins, averageKoalas) {
//   if (averageDolphins >= 2 * averageKoalas) {
//     return `Dolphins win ${averageDolphins} vs ${averageKoalas}`;
//   } else if (averageKoalas >= 2 * averageDolphins) {
//     return `Koalas win ${averageKoalas} vs ${averageDolphins}`;
//   } else {
//     return `No one won`;
//   }
// };
// console.log(checkWinner(averageDolphins, averageKoalas));

// const calcTip = (bill) => {
//   let tip = 0;
//   if (bill >= 50 && bill <= 300) {
//     return (tip = bill * 0.15);
//   } else if (bill > 300) {
//     return (tip = bill * 0.2);
//   }
//   return tip;
// };
// console.log(calcTip(125));

// const tips = [calcTip(125), calcTip(555), calcTip(44)];
// console.log(tips);

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBmi: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// mark.calcBmi();
// console.log(mark.bmi);
// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBmi: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// john.calcBmi();
// console.log(john.bmi);

// const jonas = [
//   "jonas",
//   "schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];
// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(jonas[i]);
// }
// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`======= Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`======== Lifting weights repetition ${rep}`);
//   }
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weights repetition ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//   console.log(`You rolles a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) {
//     console.log(`Loop is about to end`);
//   }
// }

// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// console.log(bills);
// let tips = [];
// let totals = [];

// const calcTip = (bills) =>
//   bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;

// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   totals.push(tips + bills[i]);
// }
// console.log(tips);
// console.log(totals);

// const calcAverage = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };
// console.log(calcAverage([1, 5, 10]));

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
const printForecast = (arr) => {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `... ${arr[i]}C in ${i + 1} days`;
  }
  console.log(str);
};

printForecast(data1);
