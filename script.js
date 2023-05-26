"use strict";

function cutFruitPieces(fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));

const calcAverage = (a, b, c) => Math.floor(a + b + c / 3);
const averageDolphins = calcAverage(44, 23, 71);
const averageKoalas = calcAverage(65, 54, 49);

console.log(averageDolphins, averageKoalas);

const checkWinner = function (averageDolphins, averageKoalas) {
  if (averageDolphins >= 2 * averageKoalas) {
    return `Dolphins win ${averageDolphins} vs ${averageKoalas}`;
  } else if (averageKoalas >= 2 * averageDolphins) {
    return `Koalas win ${averageKoalas} vs ${averageDolphins}`;
  } else {
    return `No one won`;
  }
};
console.log(checkWinner(averageDolphins, averageKoalas));
