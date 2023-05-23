'use strict';

// console.log(this);

// const calcAge = function (birthYear) {
//     console.log(2037 - birthYear);
//     console.log(this);
// }
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//     console.log(2037 - birthYear);
//     console.log(this);
// }
// calcAgeArrow(1991);

// const jonas = {
//     year: 1991,
//     calcAge: function () {
//         console.log(this);
//         console.log(2037 - this.year);
//     }
// };
// jonas.calcAge();

// const matilda = {
//     year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f();

// const jonas = {
//     firstName: 'Jonas',
//     year: 1991,
//     calcAge: function () {
//         // console.log(this);
//         console.log(2037 - this.year);

//         const isMillenial = () => {
//             console.log(this.year >= 1981 && this.year <= 1996);
//         };
//         isMillenial();
//     }
// };
// jonas.calcAge();


// const addExpr = function (a, b) {
//     console.log(arguments);
//     return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);
// var addArrow = (a, b) => {
//     console.log(arguments);
//     return a + b;
// }
// addArrow(2, 5, 8);


let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica);
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before Marriage:', jessica);
console.log('After Marriage: ', jessicaCopy);