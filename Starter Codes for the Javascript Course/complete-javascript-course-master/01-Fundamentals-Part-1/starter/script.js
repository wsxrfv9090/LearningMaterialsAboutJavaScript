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


//Test Data: