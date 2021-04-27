// Remember, we're gonna use strict mode in all scripts now!
'use strict';

let y = '23';
console.log(y);

//use of debugger
// const tempInK = function () {
//   const value = Number(prompt('enter the temp'));

//   const convertedTemp = value + 273;
//   console.table(value);
//   return convertedTemp;
// };

// console.log(tempInK());
//coding challenge

function printForcast(arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + ` ${arr[i]} in ${i + 1} days ...`;
  }
  console.log(`...${str}`);
}

printForcast([17, 21, 23]);
printForcast([12, 5, -5, 0, 4]);
