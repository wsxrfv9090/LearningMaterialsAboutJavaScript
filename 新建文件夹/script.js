'use strict';
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schemedtmann',
    birthYeah: 1991,
    job: 'techer',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function (birthYeah) {
        this.age = 2037 - this.birthYeah;
        return this.age;
    }
};

console.log(jonas.calcAge());
console.log(jonas.age);
//Challenge:
console.log(`${jonas.firstName} is a ${jonas.calcAge(1991)}-year old ${this.job},and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license`);