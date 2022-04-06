'use strict'

//  Exercise 1

function sub(num1, num2) {
    return num1 - num2
}

console.log(sub(999, 333));

//  Exercise 2

function welcome(name, age, gender) {
    return console.log(`My name is ${name}, I am ${age} years old and of ${gender} gender`)
}

welcome("Shamil Ali", 24, "Male");

//  Exercise 3

powerUp = (n1, n2) => Math.pow(n1, n2);

console.log(powerUp(8, 2));