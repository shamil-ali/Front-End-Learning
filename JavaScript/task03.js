`use strict`

// Exercise 1

let A = 100;

while(A < 200) {
  A++;
  console.log(`A = ${A}`)
}

// Exercise 2

let B = 100;

while(B <= 200) {
  if(B % 2 == 0) {
    console.log(`-`);
  } else { console.log(`*`);
    } B++;
}

// Exercise 3

let i = 0;

for (let j = 1; j <= 10; j++){
while(i < 10) {
  i++;
  console.log(`${i}`);
}console.log(`${j}`); }

// Exercise 5

let now = new Date(); 
let day = now.getDay();
switch (day) {
  case 0:
    console.log(`It's Sunday`);
    break;
  case 1:
    console.log(`It's Monday`);
  case 2:
    console.log(`It's Tuesday`);
  case 3:
    console.log(`It's Wednesday`);
  case 4:
    console.log(`It's Thursday`);
  case 5:
    console.log(`It's Friday`);
    console.log(`It's a Weekday`);
    break;
  case 6:
    console.log(`It's Saturday`);
    break;
  default:
    console.log(`Excuse me?`);
    break;
}