// let javascriptIsFun = 23;
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);
// javascriptIsFun = 'fuckyou';
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// console.log(typeof null);

// const ageJonas = 2037 - 1991;
// const ageSarah = 2037 - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);

// console.log(2 ** 3);

// const firstName = 'Jonas';
// const lastName = 'Schemedtmann';
// console.log(firstName + ' ' + lastName);

// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;
// console.log(x);

// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const now = 2033;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// const markWeight1 = 78;
// const markHeight1 = 1.69;
// const johnWeight1 = 92;
// const johnHeight1 = 1.95;

// const markWeight2 = 95;
// const markHeight2 = 1.88;
// const johnWeight2 = 85;
// const johnHeight2 = 1.76;


// const BMI1 = markWeight1 / markHeight1 ** 2;
// const BMI2 = johnWeight1 / johnHeight1 ** 2;
// const BMI3 = markWeight2 / (markHeight2 * markHeight2);
// const BMI4 = johnWeight2 / (johnHeight2 * johnHeight2);

// const markHigherBMI1 = BMI1 > BMI2;
// const markHigherBMI2 = BMI3 > BMI4;

// console.log(BMI1, BMI2, BMI3, BMI4);
// console.log(markHigherBMI1);
// console.log(markHigherBMI2);

// const firstName = 'Jonas';
// const job = 'techer';
// const birthYear = 1991;
// const year = 2077;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job} !`;
// console.log(jonasNew);

// console.log(`Just a regular string...`);

// console.log(`String with \n\
// multiple \n\
// lines`);

// console.log(`String with
// multiple
// lines`);

// const age = 15;

// if (age >= 18) {
//     console.log('Sarah can star driving license');
// }
// else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too youn. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 1991;
// let century;
// if (birthYear <= 2000) {
//     century = 20;
// }
// else {
//     century = 21;
// }
// console.log(century);

////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

// const markWeight1 = 78;
// const markHeight1 = 1.69;
// const johnWeight1 = 92;
// const johnHeight1 = 1.95;

// const markWeight2 = 95;
// const markHeight2 = 1.88;
// const johnWeight2 = 85;
// const johnHeight2 = 1.76;


// const BMI1 = markWeight1 / markHeight1 ** 2;
// const BMI2 = johnWeight1 / johnHeight1 ** 2;
// const BMI3 = markWeight2 / (markHeight2 * markHeight2);
// const BMI4 = johnWeight2 / (johnHeight2 * johnHeight2);

// const markHigherBMI1 = BMI1 > BMI2;
// const markHigherBMI2 = BMI3 > BMI4;

// console.log(BMI1, BMI2, BMI3, BMI4);
// console.log(markHigherBMI1);
// console.log(markHigherBMI2);
// if (markHigherBMI1 === true) {
//     console.log(`Mark's BMI (${BMI1}) is higher than John's (${BMI2}).`);
// }
// else {
//     console.log(`John's BMI (${BMI2}) is higher than Mark's (${BMI1}).`);
// }

// if (markHigherBMI2 === true) {
//     console.log(`Mark's BMI (${BMI3}) is higher than John's (${BMI4})`);
// }
// else {
//     console.log(`John's BMI (${BMI4}) is higher than Mark's. (${BMI3})`);
// }

// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23));

// console.log("I'm " + 23 + " years old");
// console.log('23' - '3' - '10');
// console.log('23' * '2');
// console.log('23' / '2');

// let n = '1' + 1;
// n -= 1;
// console.log(n);

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 10;
// if (money) {
//     console.log("don't spend it all");
// } else {
//     console.log("You should get a job");
// }

// let hight;
// if (hight) {
//     console.log("defined");
// } else {
//     console.log("undefined");
// }

// const age = '18';
// if (age === 18)
//     console.log(" He's 18(1");

// if (age == 18)
//     console.log(" He's 18(2");

// const favorite = prompt("Your favorite number");
// console.log(favorite);
// console.log(typeof (favorite));

// const A = true;
// const B = true;

// console.log(A && B);
// console.log(A || B);
// console.log(!A);


//Test Data: Dolphins 96, 108 and 89. Koalas score 88, 91 and 110.
//Test Data Bonus 1: Dolphins 97, 112 and 101, Koalas score 109, 95 and 123
//Test Data Bonus 2: Dolphins 97, 112 and 101, Koalas score 109, 95 and 106

// //challenge
// const avD1 = (96 + 108 + 89) / 3;
// const avK1 = (88 + 91 + 110) / 3;
// if (avD1 > avK1) {
//     console.log("Dolphins have won!!!!");
// } else if (avD1 == avK1) {
//     console.log("It's a draw!!!");
// } else {
//     console.log("Koala have won!!!!");
// }
// //bonus 1
// const avD2 = (97 + 112 + 101) / 3;
// const avK2 = (109 + 95 + 123) / 3;
// if (avD2 > avK2 && avD2 >= 100) {
//     console.log("Dolphins have won!!!!");
// } else if (avD2 == avK2 && avD2 >= 100) {
//     console.log("It's a draw!!!");
// } else if (avD2 < avK2 && avK2 >= 100) {
//     console.log("Koala have won!!!!");
// }
// //bonux 2
// const avD3 = (97 + 112 + 101) / 3;
// const avK3 = (109 + 95 + 106) / 3;
// if (avD3 > avK3 && avD3 >= 100) {
//     console.log("Dolphins have won!!!!");
// } else if (avD3 === avK3 && avD3 >= 100) {
//     console.log("It's a draw!!!");
// } else if (avD3 < avK3 && avK3 >= 100) {
//     console.log("Koala have won!!!!");
// }

// const day = 'monday';
// switch (day) {//day === monday
//     case 'monday':
//         console.log("Plan course structure");
//         break;
//     case 'Tuesday':
//         console.log()
// }

// const age = 23;
// age >= 18 ? console.log("Let's go drinking!!!") : console.log("Let's drink water!!! TT ");

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// let age = 28;
// console.log(`I'd like to drink ${age >= 18 ? 'Wine' : 'Water'}`);

//Coding Challenge #4
//TEST DATA: test for bill values 275, 40 and 430

// let bill = 275;
// let tip = 50 <= bill && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill is ${bill}, The tip is ${tip}, The total is ${bill + tip}`);

// bill = 40;
// tip = 50 <= bill && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill is ${bill}, The tip is ${tip}, The total is ${bill + tip}`);

// bill = 430;
// tip = 50 <= bill && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill is ${bill}, The tip is ${tip}, The total is ${bill + tip}`);