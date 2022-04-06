'use strict'

//  Exercise 1

let darthVader = {
  allegiance : `empire`,
  weapon : `lightsabre`,
  sith : true
};

console.log(darthVader);

//  Exercise 2

console.log(`Darth Vader's allegiance is to the ${darthVader.allegiance}`);
console.log(`Darth Vader's weapon of choice is a ${darthVader.weapon}`);
console.log(`Darth Vader is a sith? ${darthVader.sith}`);
console.log(`Darth Vader is a Jedi? ${darthVader.sith ? "false" : "true"}`)

//  Exercise 3
 
  // a
 let myArray = [`hello`, `everyone`];

  // b
 console.log(myArray.length);

  // c
 console.log(myArray.push(`I`, `am`, `Shamil`));

  // d
 myArray.shift();
 
  // e
 for(let eachElement of myArray) {
     console.log(eachElement);
 }