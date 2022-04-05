// USE STRICT and CONSOLE

/*
	USE STRICT:
  Forces us to write 'secure' JavaScript
	Stops us using protected words, accidentally making global variables etc.
*/

`use strict`

// let let = 1;

// console.log(`Hello World`);

// console.info(`This is info`);

// console.warn(`This is a warning`);

// console.error(`This is an error message`);

// Styling the console

// console.log(`%c` + `some text`, `color: black; background-color: white; font-size: 30px; padding: 15px;`);

// console.log(`%c` + `red text` + `%c` + `blue text`, `color: red;`, `color: blue`);

// VARIABLES and DATA TYPES

/*
		In JavaScript, data types are DYNAMIC and MUTABLE
		-> They are decided at run time
		-> Stored in memory as text
*/

/*
		We declare variables with:
		1. let   -> standard variable
		2. const -> constant
		3. var   -> the old way we don't use anymore

		Naming standard is camelCase
		$variableName
		_myVariable
*/

// let    variableOne    = `hello`;
// const  variableTwo    = 4;
// var    oldVariable    = true;

//  DATA TYPES

/*
		In JS there are two 'types' of types
		PRIMATIVES and OBJECTS

		OBJECTS have one datatype        -> object
		PRIMATIVES have everything else  -> boolean, number, string, symbol, null, bigint, undefined
*/

// PRIMATIVES

// let aBoolean     = false;
// let aNumber      = 10;
// let aString      = `text123123@!!!`;
// let aBigInt      = 9999999999999999n;
// let aSymbol      = Symbol(`description`);
// let aNull        = null;
// let anUndefined;

// OBJECTS : Collection of Properties, Mutable, made up of Key : Value pairs

// let myObject = {
// 		key : `value`,
// 		anotherKey : 12345
// }
// console.log(myObject);

// STRING CONCATENATION : Joining strings end to end (Memory intensive)

// let string1 = `41 * 12 = `;
// let result1 = 41 * 12;
// console.log(string1 + result1);

// STRING INTERPOLATION : Uses 1 string only, uses string literals containing placeholders, sometimes called 'template literals'

// let string2 = `42 * 13 = ${42 * 13}`;
// console.log(string2);

//  ASI : Automatic Semi-Colon Insertion

/*
		JS automatically inserts semi-colons for us at the end of a 'line'

		This can lead to unwanted behaviour
*/

// let a = 1;
// let b = 2;

// a
// ++
// b

// console.log(`a = ${a}, b = ${b}`);

// let c = 1;
// let d = 2;

// c++;
// d;

// console.log(`c = ${c}, d = ${d}`);

//  ITERATION

//  loops

//  FOR
/*
		use a counter and run until a condition is NO LONGER met
*/

// for(let i = 0; i < 5; i++) {
// 		console.log(`i = ${i}`);
// }

//  WHILE
/*
		Work with booleans and run until a boolean is false
*/

// let condition = true;
// let increment = 0;

// while(condition) {
// 		console.log(`increment me`);
// 		increment++;

// 		if(increment == 3) {
// 				condition = false;
// 		}
// }

//  DO-WHILE
/*
		Like a while loop but always runs at least once
*/

// let x = false;

// do {
// 		console.log(`We are running!`);
// } while(x);

// 	SWITCH CASES
/*
		Run until BREAK or RETURN
*/

// let num = 5;

// switch(num) {
// 	case 0:
// 			console.log(`num = ${num}`);
// 			break;
// 	case 1:
// 			console.log(`num = ${num}`);
// 			break;
// 	case 2:
// 			console.log(`num = ${num}`);
// 			break;
// 	case 3:
// 			console.log(`num = ${num}`);
// 			break;
// 	case 4:
// 			console.log(`num = ${num}`);
// 			break;
// 	case 10:
// 			console.log(`num = ${num}`);
// 			break;
// 	default:
// 			console.log(`This is out of Scope`);
// }

// let i = 2;
// while(i <= 6) {
// 		console.log(i + 1);
// 		i = i + 2;
// }

// for(let i = 2; i <= 6; i = i + 2) {
// 		console.log(i + 1);
// }

// CONDITIONALS
// TRUTHY and FALSEY

/*

		Falsey:

		false
		0
		`` '' ""
		undefined
		null
		NaN -> not a number

		Truthy:

		EVERYTHING ELSE

*/

//  IF (ELSE IF AND ELSE)

/*
  Check a condition, then run a cofe block if it is met
*/

// let a = 2;

// if (a == 0) {
// 		console.log(`a is currently ${a}`)
// } else if (a) {
// 		console.log(`a is truthy`);
// } else {
// 		console.log(`a is falsey`)
// }

// 	TERNARY IF

/*
		Shorthand version of an IF / ELSE statement
*/

// let x = 1;

// if (x == 1) {
// 		console.log(`hello`);
// } else {
// 		console.log(`goodbye`);
// }

// x == 1 ? console.log(`hello`) : console.log(`goodbye`);

// 	EQUALITY and TYPE

/*
		Type is mutable in JS, so you can compare different data types!
*/

// 1 == `1` ? console.log(true) : console.log(false);

/* 	JS is mutating the type so that ONE is equal to ONE
		it is checking the VALUE not the TYPE
*/

// if you want to ALSO evaluate the type

// 2 === `2` ? console.log(true) : console.log(false);

// the STRICTLY EQUAL OPERATOR '===' checks type and value

// OBJECTS, ARRAYS and JSON

// OBJECTS

/*

*/

// let animal = new Object();
// console.log(typeof(animal));

// animal[`name`] = `Clifford`
// animal[`type`] = `Dog`
// animal[`size`] = `Big`

// console.log(animal);
// console.log(animal.type);

// animal.colour = `red`;
// console.log(animal);

// LITERAL NOTATION

let vehicle = {
	type : `bike`,
	seats : 1,
	wheels : 2
}

// console.log(vehicle);
// console.log(vehicle.seats);

// Data can be stored in an ARRAY

let garage = [
	vehicle,
	{type:`car`,seats:5,wheels:4}
]

// console.log(garage);

//  Looping through an array

let x = [`a`,`b`,`c`,`d`,`e`];

for(let i = 0; i<x.length; i++){
    // console.log(x[i]);
}

// ENHANCED FOR loops

/*
		Work with arrays of items, will always loop through EVERY item
*/
for (let item of x) {
	// console.log(item);
}

// Specific Methods to act on ARRAYS

// REVERSE

// console.log(x.reverse());

// JOIN

// console.log(x.join(`, the next letter is `));

// JSON -> JavaScript Object Notation

/*
	Literal notaiton for JS objects
*/

let newJSON = {
	name : `cameron`,
	age : 29
}

// To convert JSON to different datatypes we have to use OVERLOADED methods

// JSON to String

let str = JSON.stringify(newJSON);

console.log(newJSON);
console.log(str);

let person = JSON.parse(`{"name":"ellie","age":43}`);
console.log(person);

// FUNCTIONS

/*
		A block of code that does a thing!
		They are envoked (or run) when 'called'
		DRY principles (don't repeat yourself)
		they can take arguments
		Globally scoped
*/

function hello(message) {
		console.log(message);
}

hello(true);

// RETURNS

/*
		When a funciton reaches a return it stops
*/

let bye = false;

function goodbye() {
		console.log(`goodbye`);
		return bye = true;
}

console.log(bye);

goodbye();

console.log(bye);

//  VARIABLE RETURNS

function sum(a , b) {
		return a + b;
}

console.log(sum(3,2));

// ARROW FUNCTIONS

function log(data) {
		console.log(data);
}

log = (data) => {
		console.log(data);
}

log = (data) => {console.log(data)}

let log2 = data => console.log(data);

log("message1");
log2("message2");