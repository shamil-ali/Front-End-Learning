`use strict`

// FizzBuzz using IF / ELSE
/*

for (let i = 1; i <= 100; i++) {

  if ((i % 3 === 0) && (i % 5 === 0)) {

    console.log(`FizzBuzz`);
  } 
    else if (i % 5 === 0) {

    console.log(`Buzz`);
  } 
    else if (i % 3 === 0) {

    console.log(`Fizz`);
  } 
    else {

    console.log(i);
  }
}

*/

// FIzzBuzz using SWITCH CASE
/*

for ( let i = 1; i <= 100; i++) {
  switch(true) {
      case (i % 15 == 0): 
          console.log(`FizzBuzz`);
          break;
      case (i % 3 == 0): 
          console.log(`Fizz`);
          break;
      case (i % 5 == 0): 
          console.log(`Buzz`);
          break;
      default:
          console.log(i);
      }
}

*/

/*

for (let i = 1; i <= 100; i++) {

  let str;

  if (i % 3) {
      str = ``;
  } else {
      str = `Fizz`;
  }

  if (i % 5) {
      str = `${str}`;
  } else {
      str = `${str}Buzz`;
  }

  if (str) {
      console.log(str)
  } else {
      console.log(i)
  }
}

*/

for (let i = 1; i <= 100; i++) {
    console.log(`${i % 3 ? `` : `Fizz`}${i % 5 ? `` : `Buzz`}` || i);
}