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