// Below is the code channgenge - 1
let weightMarks = 78, weightJohn = 92;
let lengthMarks = 1.69, lengthJohn = 1.95;

let bmi1, bmi2;

bmi1 = (weightMarks) / (lengthMarks * lengthMarks);

bmi2 = (weightJohn) / (lengthJohn * lengthJohn);

let markHigherBMI;

markHigherBMI = (bmi1 > bmi2);
console.log(bmi1, bmi2, markHigherBMI);

if (bmi1 > bmi2) {
    console.log(`marks'BMI ${bmi1} is greater `)
}
else {
    console.log(`johns'BMI ${bmi2} is greater `)

}



// Below is the code challenge-2


const dolphinsMatch_1 = 96, dolphinsMatch_2 = 108, dolphinsMatch_3 = 89;
const koalasMatch_1 = 88, koalasMatch_2 = 91, koalasMatch_3 = 110;
let dolphinsAvg, koalasAvg;
dolphinsAvg = (dolphinsMatch_1 + dolphinsMatch_2 + dolphinsMatch_3) / 3;
koalasAvg = (koalasMatch_1 + koalasMatch_2 + koalasMatch_3) / 3

dolphinsAvg = 100;
koalasAvg = 100;

console.log(`average of dolphins is ${dolphinsAvg} and average of koalas team is ${koalasAvg} `);

if (dolphinsAvg > koalasAvg) {
    console.log(`Winner team if dolphins and score is ${dolphinsAvg}`);
}
else if (dolphinsAvg < koalasAvg) {
    console.log(`Winner team is koalas and score is ${koalasAvg
        }`);
}
else {
    console.log(`match is a draw, both team scored same in the match scores are as koalas team = ${koalasAvg} and dolphins team =  ${dolphinsAvg}`);
}

const minimumScore = 100;
if ((dolphinsAvg > koalasAvg) && (dolphinsAvg >= 100)) {
    console.log(`Winner team if dolphins and score is ${dolphinsAvg}`);
}
else if ((dolphinsAvg < koalasAvg) && (koalasAvg >= 100)) {
    console.log(`Winner team is koalas`);

}
else if ((dolphinsAvg === koalasAvg) && (dolphinsAvg >= 100) && (koalasAvg >= 100)) {
    console.log(`match is a draw, both team scored same in the match scores are as koalas team = ${koalasAvg} and dolphins team =  ${dolphinsAvg}w`);
}
else {
    console.log(`no team won the match, teams have not met the winning criteria dolphins = ${dolphinsAvg} and koalas = ${koalasAvg}`);

}


let day = "monday";
switch (day) {
    case "monday":
        console.log(`task of monday`);
        break;

    case "tuesday":
        console.log(`task of tuesday`);
        break;

    default:
        console.log(`you are on leave`);

}

let age = 17;
console.log(`i am sunil and i want to drink ${age >= 18 ? 'wine' : 'water'} `);