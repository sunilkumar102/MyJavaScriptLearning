const age = 15;
const leftYears = 18 - age;

if (age >= 18) {
    console.log(`sunil can start driving`)
}
else {
    console.log(`sunil you can not drive, wait for ${leftYears} years more`);
}

const inputYear = "1991";
console.log(Number(inputYear) + 18);

let a = '1' + 2;
a = a + '3';
a = a - 1;
console.log(a);

console.log(Boolean(0));


let height;
if (height) {
    console.log("height is defined");
}
else {
    console.log("height is not defined");

}

let promptNumber = Number(prompt("enter your lucky number"));
console.log(promptNumber);
if (promptNumber === 23) {
    console.log(promptNumber + "is a great number");
}