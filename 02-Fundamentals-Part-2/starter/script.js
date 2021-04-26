'use strict';
let driverLicense = false;
const passTest = true;
if (passTest) driverLicense = true;
if (driverLicense) console.log(`yeahhh i can drive now`);


//Functions Calling running invoking

function logger() {
    console.log(" my first function in java")
}
logger();
logger();
logger();




function juiceMaker(apple, orange) {
    console.log(apple, orange);
    let juice = ` juice of ${apple} apple and ${orange} orange`;
    return juice;

}

let fruitJuice = juiceMaker(6, 4);
console.log(fruitJuice);


function calcAge1(birthYear) {
    return 2021 - birthYear;
}

const age1 = calcAge1(1998);
console.log(age1);

const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}

const age2 = calcAge2(1997);
console.log(age1, age2);


// arrow function 

const calAge3 = birthYear => 2021 - birthYear;

const age3 = calAge3(1995);
console.log(age3);

const square = num => num * num;
console.log(square(5));


const remainingYears = birthYear => {
    const age = 2021 - birthYear; const yearsLeft = 65 - age;
    return yearsLeft;
}

console.log(remainingYears(1998));

function fruitCutter(fruit) {
    return fruit * 4;
}
function juiceMaker(apple, orange) {
    const applePieces = fruitCutter(apple);
    const OrangePieces = fruitCutter(orange);
    console.log(apple, orange);
    let juice = ` juice of ${applePieces}  pieces of apple and ${OrangePieces} pieces of  orange`;
    return juice;

}


let fruitJuice2 = juiceMaker(2, 4);
console.log(fruitJuice2);


/*const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const teamDolphinsAvg = calcAverage(44, 23, 71);
const teamKoalasAvg = calcAverage(65, 54, 49);
console.log(`average of Dolphilns team is ${teamDolphinsAvg} and average of Koalas team is ${teamKoalasAvg}`);
*/

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas
    ) {
        return `Dolphins win ( ${avgDolphins},${avgKoalas})`;
    }
    else if (avgKoalas >= 2 * avgDolphins) {
        return `Koalas win (${avgKoalas},${avgDolphins})`;
    }
    else {
        return `No team wins`;
    }

}

/* const winner = checkWinner(teamDolphinsAvg, teamKoalasAvg);
console.log(winner);

const friends = ['a', 'b', 'c'];
console.log(friends);
friends.push('d');
console.log(friends);
const newLength = friends.push();
console.log(newLength);
friends.pop();
console.friends;
friends.pop();


function calcTip(billValue) {
    if ((50 < billValue) && (billValue < 300)) {
        return billValue * 0.15;
    }
    else {
        return 0.20 * billValue
    }
}

const tip = calcTip(100);
console.log(tip);

/*const bills = [125, 555, 44];
console.log(bills);
const tipp = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tipp[0], bills[1] + tipp[1], bills[2] + tipp[2]]
console.log(bills);
console.log(tipp);
console.log(total); */


// Objects 

/*const myIntro = {
    name: 'Sunil',
    age: 22,
    state: 'Rajasthan',
    friend: ['vikash', 'b', 'c', 'd', 'e']
}
console.log(myIntro.age);

//const interestedIn = prompt('Please type what do you want to know about this person, Type name, age or state');
if (myIntro[interestedIn]) {
    console.log(myIntro[interestedIn]);

}
else {
    console.log("please enter a valid data, Please type any of name,age,state");

}

console.log(`${myIntro.name} has ${myIntro.friend.length} friends and his best friend is ${myIntro.friend[0]} `); 
*/

const myIntro = {
    name: 'Sunil',
    birthYear: 1997,
    state: 'Rajasthan',
    friend: ['vikash', 'b', 'c', 'd', 'e'],
    hasDriverlicense: false,
    ageCalc: function () {
        this.myAge = 2021 - this.birthYear;

        return this.myAge
    },
    summaryIntro: function () {

        return `${this.name}  is a ${this.ageCalc()}  years old boy and he  ${this.hasDriverlicense ? 'has' : 'does not have'} a driver license`
    }

}
console.log(myIntro.ageCalc());

console.log(myIntro.summaryIntro())


// coding challenge 
const markMiller =
{
    name: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height)
        return this.BMI;

    }


}

const JohnSmith =
{
    name: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height)
        return this.BMI;

    }


}


if (markMiller.calcBMI() > JohnSmith.calcBMI()) {
    console.log(`${markMiller.name}'s BMI (${markMiller.calcBMI()}) is heigher than ${JohnSmith.name}'s BMI (${JohnSmith.calcBMI()})`)
}
else {
    console.log(`${JohnSmith.name}'s BMI (${JohnSmith.calcBMI()}) is heigher than ${markMiller.name}'s BMI ${markMiller.calcBMI()}`)

}

/*console.log(`${markMiller.calcBMI() > JohnSmith.calcBMI() ? `${markMiller.name}'s BMI (${markMiller.BMI}) is heigher than ${JohnSmith.name}'s BMI (${JohnSmith.BMI})` : `${JohnSmith.name}'s BMI (${JohnSmith.BMI}) is heigher than ${markMiller.name}'s BMI ${markMiller.BMI}`}`)
*/


let dice = Math.trunc(Math.random() * 6 + 1);
console.log(dice);

while (dice !== 6) {
    console.log(`you rolled ${dice}`);
    dice = Math.trunc(Math.random() * 6 + 1);
    if (dice === 6) {
        console.log("loop is about to end");
    }
}

// java script fundamental basic final coding challange

function calcTip(billValue) {
    if ((50 < billValue) && (billValue < 300)) {
        return billValue * 0.15;
    }
    else {
        return 0.20 * billValue
    }
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < 10; i++) {
    tips[i] = calcTip(bills[i]);
    totals[i] = tips[i] + bills[i];
}

console.log(bills, tips, totals);


let arr = [];


function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];

    }
    let avg = sum / arr.length;
    return avg;
}

console.log(calcAverage(totals));
