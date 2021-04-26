// Remember, we're gonna use strict mode in all scripts now!
'use strict';

let y = '23';
console.log(y);

//debugger
const tempInK = function () {
  const value = Number(prompt('enter the temp'));

  const convertedTemp = value + 273;
  console.table(value);
  return convertedTemp;
};

console.log(tempInK());
