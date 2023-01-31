'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// function logger() {
//     console.log("My name is Jonas");
// }

// //calling / running / invoking
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// //Function Declaration
// function calcAge1(birthYeah) {
//     return 2037 - birthYeah;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// //Funcion Expressions
// const calcAge2 = function (birthYeah) {
//     return 2037 - birthYeah;
// }
// const age2 = calcAge2(1991);

// console.log(age1, age2);

// //Arrow Functions
// birthYeah => 2037 - birthYeah;//declaration
// const calcAge3 = birthYeah => 2037 - birthYeah;//expression
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYeah, firstName) => {
//     const age = 2037 - birthYeah;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(5, 0));

//Coding Challenge#1
//TEST DATA 1: Dolphins score 44, 23 and 71, Koalas score 65, 54 and 49
//TEST DATA 2: Dolphins score 85, 54 and 41, Koalas score 23, 34 and 27

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = (avg1, avg2) => avg1 > avg2 ? console.log(`Dolphins have won!!! (${parseInt(avg1)} vs. ${avg2})`) : console.log(`Koalas have won!!! (${parseInt(avg1)} vs. ${avg2})`);

const D1score1 = 44;
const D1score2 = 23;
const D1score3 = 71;
const K1score1 = 65;
const K1score2 = 54;
const K1score3 = 49;
const D2score1 = 85;
const D2score2 = 23;
const D2score3 = 71;
const K2score1 = 23;
const K2score2 = 34;
const K2score3 = 27;

const D1Average = calcAverage(D1score1, D1score2, D1score3);
const K1Average = calcAverage(K1score1, K1score2, K1score3);
console.log(D1Average);
console.log(K1Average);
const result1 = checkWinner(D1Average, K1Average)
console.log(result1);

const D2Average = calcAverage(D2score1, D2score2, D2score3);
const K2Average = calcAverage(K2score1, K2score2, K2score3);
console.log(D2Average);
console.log(K2Average);
console.log(checkWinner(D2Average, K2Average));





