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

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const checkWinner = (avg1, avg2) => avg1 > avg2 ? console.log(`Dolphins have won!!! (${parseInt(avg1)} vs. ${avg2})`) : console.log(`Koalas have won!!! (${parseInt(avg1)} vs. ${avg2})`);

// const D1score1 = 44;
// const D1score2 = 23;
// const D1score3 = 71;
// const K1score1 = 65;
// const K1score2 = 54;
// const K1score3 = 49;
// const D2score1 = 85;
// const D2score2 = 23;
// const D2score3 = 71;
// const K2score1 = 23;
// const K2score2 = 34;
// const K2score3 = 27;

// const D1Average = calcAverage(D1score1, D1score2, D1score3);
// const K1Average = calcAverage(K1score1, K1score2, K1score3);
// console.log(D1Average);
// console.log(K1Average);
// const result1 = checkWinner(D1Average, K1Average)
// console.log(result1);

// const D2Average = calcAverage(D2score1, D2score2, D2score3);
// const K2Average = calcAverage(K2score1, K2score2, K2score3);
// console.log(D2Average);
// console.log(K2Average);
// console.log(checkWinner(D2Average, K2Average));

//Arrays

// const friends = ['Davy', 'Isabella'];
// const years = new Array(1991, 1897, 2932);

// console.log(friends);
// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[1] = 'Bella';
// console.log(friends);

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schemedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

// const friends = ['Davy', 'Isabella'];
// friends.push('Exar');
// console.log(friends);

// friends.unshift('Exiliarate');
// console.log(friends);

// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// console.log(friends.indexOf('Davy'));
// console.log(friends.indexOf('Bob'));


// console.log(friends.includes('Davy'));
// console.log(friends.includes('Bob'));


// if (friends.includes('Davy')) {
//     console.log('You have a friend called Davy');
// }

// function calcTip(sum) {
//     if (sum >= 50 && sum <= 300) {
//         return sum * 0.15
//     }
//     else {
//         return sum * 0.20
//     }
// }

// const bills = [125, 555, 44];
// const tips = [0];
// tips.pop();
// tips.push(calcTip(125));
// tips.push(calcTip(555));
// tips.push(calcTip(44));
// console.log(tips);
// const total = bills[0] + bills[1] + bills[2] + tips[0] + tips[1] + tips[2];
// console.log(total);

// const jonasArray = [
//     'Jonas',
//     'Schemedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'peter', 'Steven']
// ];

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schemedtmann',
//     age: 2037 - 1991,
//     job: 'techer',
//     friends: ['Michael', 'Peter', 'Steven']
// };

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schemedtmann',
//     age: 2037 - 1991,
//     job: 'techer',
//     friends: ['Michael', 'Peter', 'Steven']
// };
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschemedtmann';
// console.log(jonas);

// const interestedIn = prompt('What do you want to know about jonas? Choose between firstName, lastNmae, age, job and friends');
// hasDriversLicense
// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log("Wrong Request");
// }

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schemedtmann',
//     birthYeah: 1991,
//     job: 'techer',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//     calcAge: function (birthYeah) {
//         this.age = 2037 - this.birthYeah;
//         return this.age;
//     },
//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge(1991)}-year old ${this.job},and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license`;
//     }
// };

// console.log(jonas.calcAge());
// console.log(jonas.age);
// //Challenge:
// console.log(jonas.getSummary());



// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     culcBMI: function (mass, height) {
//         this.BMI = this.mass / (this.height) ** 2;
//         return this.BMI;
//     }
// }

// const smith = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     culcBMI: function (mass, height) {
//         this.BMI = this.mass / (this.height) ** 2;
//         return this.BMI;
//     }
// }

// mark.culcBMI();
// smith.culcBMI();
// const bigger = mark.BMI > smith.BMI ? mark : smith;
// const smaller = bigger === mark ? smith : mark;
// console.log(`${bigger.fullName}'s BMI (${bigger.BMI}) is higher than ${smaller.fullName}'s BMI (${smaller.BMI})`);

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

// const years = [1991, 2033, 1093, 2333];
// const age = [];

// for (let i = 0; i < years.length; i++) {
//     age.push(2037 - years[i]);
// }

// console.log(age);

// const bills = [22, 295, 176, 440, 27, 105, 10, 1100, 86, 52];
// let tips = [];
// let totals = [];

// function calcTip(sum) {
//     if (sum >= 50 && sum <= 300) {
//         return sum * 0.15
//     }
//     else {
//         return sum * 0.20
//     }
// }

// function calcAverage(arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i];
//     }
//     return total / arr.length;
// }

// for (let i = 0; i < bills.length; i++) {
//     tips[i] = calcTip(bills[i]);
//     totals[i] = tips[i] + bills[i];
// }


// console.log(tips);
// console.log(totals);
// console.log(calcAverage(bills));
// console.log(calcAverage(tips));
// console.log(calcAverage(totals));