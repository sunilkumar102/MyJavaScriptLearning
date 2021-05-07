'use strict';
const arr = [1, 2, 3];

// normal way to destructuring array
const a = arr[0];
const b = arr[1];
const c = arr[2];

//but in destructuring array in a better way,(destructuring assignment)
const [x, y, z] = arr;
console.log(x, y, z);

const restaurant = {
  name: 'Sunil da Dhaba',
  location: 'Jaipur',
  category: ['chinese', 'veg', 'non-veg', 'organic'],
  starterMenu: ['paneer', 'honey-chilli', 'maggie', 'pizza', 'paavbhaji'],
  mainMenu: ['dalroti', 'chicken', 'chholebhature'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainMenuIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainMenuIndex]];
  },

  orderdelivery: function ({
    starterIndex = 0,
    mainMenuIndex = 0,
    address,
    time = '8:00 am',
  }) {
    console.log(
      `your order ${this.starterMenu[starterIndex]},${this.mainMenu[mainMenuIndex]} will be delivered to ${address} at ${time} `
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your pasta with ${ing1},${ing2},${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//Rest pattern and parameters

//below is spread operator because of right side of =
const arrRest = [1, 2, ...[3, 4]];
//below is rest pattern operator
const [i, h, ...others] = [1, 2, 3, 4, 5];
console.log(i, h, others);

const [dalroti, , chholebhature, ...otherss] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(dalroti, chholebhature, others);

//objects rest operator

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//rest in functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  console.log(numbers, sum);
};

add(2, 3);
add(5, 3, 4, 2);

const g = [23, 5, 6];
add(...g);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

restaurant.orderdelivery({
  starterIndex: 1,
  mainMenuIndex: 2,
  address: 'jaipur road number 4',
  time: '10:30 Pm',
});

restaurant.orderdelivery({
  address: 'jaipur road number 4',
});

//destructing objects
const { name, openingHours, mainMenu } = restaurant;
console.log(name, openingHours, mainMenu);
// renaming variables
const {
  name: restaurantName,
  starterMenu: specialMenu,
  mainMenu: genericMenu,
} = restaurant;
console.log(restaurantName, specialMenu, genericMenu);

//setting default value
const { menu = [], mainMenu: dinner = [] } = restaurant;
console.log(menu, dinner);

// mutating variables
let j = 111;
let k = 100;
const obj = { j: 102, k: 92, e: 23 };
({ j, k } = obj);
console.log(j, k);

//nested obj destructuring

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

//let [main, , secoondary] = restaurant.category;
//console.log(main, secoondary);

//switching values
//[main, secoondary] = [secoondary, main];
//console.log(main, secoondary);

console.log(restaurant.order(1, 2));
const [starter, main] = restaurant.order(1, 2);
console.log(starter, main);

// nestedarrays destructuring
//const nestedArray = [1, 2, [3, 4]];
//const [, , [j, k]] = nestedArray;
//console.log(j, k);

//default values
//const [p = 1, q, r] = nestedArray;
//console.log(p, q, r);

// spread operator

const arr0 = [1, 2, 3, 4];
const arr2 = [5, 6];
const arr3 = [...arr0, ...arr2];
console.log(arr0);
console.log(arr2);

console.log(arr3);

const newMenu = [...restaurant.mainMenu, 'rice'];
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 array
const fullMenu = [...mainMenuCopy, ...restaurant.starterMenu];
console.log(fullMenu);

// spread operator on strings
const str = 'Sunil';
const alphatbets = [...str];
console.log(alphatbets);

// real life example of spread operator using function
const ingredients = [
  // prompt("let's make pasta  Ingredient 1 ? "),
  // prompt('ingredient 2 ?'),
  // prompt('ingredient 3'),
];

restaurant.orderPasta(...ingredients);

//spread operator in object
const newRestaurent = { ...restaurant, founder: 'sunil', foundIn: 2009 };
console.log(newRestaurent);

// short circuiting
console.log('-------OR.... \n');
//restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('\n');

console.log('-------AND.... \n');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

// nullish coalescing operator

restaurant.numGuests = 0;
const guests3 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
// for nullish operator zero and empty string is not a falshy value
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

//for of loop
const newMenu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of newMenu2) {
  console.log(item);
}
//for of loom entries
for (const item of newMenu2.entries()) {
  console.log(`${item[0] + 1} : ${item[1]}`);
}
//now using desctructuring
for (const [i, el] of newMenu2.entries()) {
  console.log(`${i + 1} : ${el}`);
}

//console.log(...newMenu2.entries());

//enhanced object literals
// if you want to write another object inside a object, just write the property name exactly same as object name

// optional chaining
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}
//syntaz of optional chaining
// only if monday property exist only then open property will be read, if property does not exist it will return undefined , if we donot use optional chaining then it will throw a error
console.log(restaurant.openingHours.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}
// optional chaining on methods

console.log(restaurant.orderss?.(0, 1) ?? 'method does not exist');
// on arrays

const users = [
  {
    name: 'Sunil',
    mail: 'kumar@gmail.com',
  },
];
console.log(users[0]?.name ?? 'user array empty');

//object keys
// properties name

const properties = Object.keys(openingHours);
console.log(properties);
for (const day of Object.keys(openingHours)) {
  console.log(day);
}

// properties value
const values = Object.values(openingHours);
console.log(values);

// entire object with keys

const entriess = Object.entries(openingHours);
console.log(entriess);

for (const [key, { open, close }] of entriess) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
//set
const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Pasta', 'Risotto']);
console.log(orderSet);
// use of sets

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('bread'));
orderSet.add('garlic bread');
orderSet.add('garlic bread');
orderSet.delete('Risotto');
console.log(orderSet);
// orderSet.clear();

for (const order of orderSet) {
  console.log(order);
}
// use of set is to remove duplicate values
// example

const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
const stafUnique = [...new Set(staff)];
console.log(stafUnique);

// map
const rest = new Map();
rest.set('name', 'sunil ka dhaba');
rest.set(1, 'chomu');
console.log(rest.set(2, 'jaipur'));

rest
  .set('categories', ['a', 'b', 'c', 'd'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we are closed');

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest.size);

const arr4 = [1, 2];
rest.set(arr4, 'test');
console.log(rest.get(arr4));

// populating a set method

const question = new Map([
  ['question', 'what is the best prog language in the world?'],
  [1, 'c'],
  [2, 'java'],
  [3, 'JS'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'try again'],
]);
console.log(question);

console.log(new Map(Object.entries(openingHours)));

// maps are etrables
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key} : ${value}`);
  }
}
//const answer = Number(prompt('your answer'));
//console.log(answer);

// if (answer === 3) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }

//console.log(question.get(answer === question.get('correct')));

// convert map to array
//console.log(...question);

// working with strings

const airLine = 'AIR India';
const plane = 'E320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log(airLine.length);

console.log(airLine.indexOf('I'));
console.log(airLine.lastIndexOf('I'));
console.log(airLine.indexOf('India'));

const upperCase = function (word) {
  const changeCase = word.split(' ');

  console.log(changeCase[1].slice(1));

  const finalString = [];
  console.log(changeCase);
  for (const n of changeCase) {
    finalString.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(finalString.join(' '));
};

upperCase('my Name is sunil kumar');

//padding
const maskCreditCard = function (num) {
  const str = num + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(7385847463748));

//string repeat
