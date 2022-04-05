// USE STRICT and CONSOLE

/*
	USE STRICT:
  Forces us to write 'secure' JavaScript
	Stops us using protected words, accidentally making global variables etc.
*/

`use strict`

// let let = 1;

console.log(`Hello World`);

console.info(`This is info`);

console.warn(`This is a warning`);

console.error(`This is an error message`);

// Styling the console

console.log(`%c` + `some text`, `color: black; background-color: white; font-size: 30px; padding: 15px;`);

console.log(`%c` + `red text` + `%c` + `blue text`, `color: red;`, `color: blue`);

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

let    variableOne    = `hello`;
const  variableTwo    = 4;
var    oldVariable    = true;

//  DATA TYPES

/*
		In JS there are two 'types' of types
		PRIMATIVES and OBJECTS

		OBJECTS have one datatype        -> object
		PRIMATIVES have everything else  -> boolean, number, string, symbol, null, bigint, undefined
*/

// PRIMATIVES

let aBoolean     = false;
let aNumber      = 10;
let aString      = `text123123@!!!`;
let aBigInt      = 9999999999999999n;
let aSymbol      = Symbol(`description`);
let aNull        = null;
let anUndefined;

// OBJECTS : Collection of Properties, Mutable, made up of Key : Value pairs

let myObject = {
		key : `value`,
		anotherKey : 12345
}
console.log(myObject);

// STRING CONCATENATION : Joining strings end to end (Memory intensive)
let string1 = `41 * 12 = `;
let result1 = 41 * 12;
console.log(string1 + result1);

// STRING INTERPOLATION : Uses 1 string only, uses string literals containing placeholders, sometimes called 'template literals'
let string2 = `42 * 13 = ${42 * 13}`;
console.log(string2);