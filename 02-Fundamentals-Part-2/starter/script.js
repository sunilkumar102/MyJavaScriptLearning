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


const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const teamDolphinsAvg = calcAverage(44, 23, 71);
const teamKoalasAvg = calcAverage(65, 54, 49);
console.log(`average of Dolphilns team is ${teamDolphinsAvg} and average of Koalas team is ${teamKoalasAvg}`);


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

const winner = checkWinner(teamDolphinsAvg, teamKoalasAvg);
console.log(winner);

const friends = ['a', 'b', 'c'];
console.log(friends);
friends.push('d');
console.log(friends);
const newLength = friends.push();
console.log(newLength);