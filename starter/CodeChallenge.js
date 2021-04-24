let weightMarks = 78, weightJohn = 92;
let lengthMarks = 1.69, lengthJohn = 1.95;

let bmi1, bmi2;

bmi1 = (weightMarks) / (lengthMarks * lengthMarks);

bmi2 = (weightJohn) / (lengthJohn * lengthJohn);

let markHigherBMI;

markHigherBMI = (bmi1 > bmi2);
console.log(bmi1, bmi2, markHigherBMI);
