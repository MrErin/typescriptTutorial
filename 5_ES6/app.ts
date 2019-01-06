let variable = 'test';
console.log(variable);
variable = 'another value';
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99

// block scope
const reset = () => {
  let variable = null;
  console.log(variable);
};
reset();
console.log(variable);

// arrow functions
console.log('ARROW FUNCTIONS');
const addNumbers = function(number1: number, number2: number): number {
  return number1 + number2;
};
console.log(addNumbers(10, 3));

const multiplyNumbers = (number1: number, number2: number) => number1 * number2;
console.log(multiplyNumbers(10, 3));

const greet = () => {
  console.log('Hello!');
};
greet();

const greetFriend = (friend: string) => console.log(friend);
greetFriend('Manu');

// default parameters
console.log('DEFAULT PARAMETERS');
const countdown = (start: number = 10): void => {
  console.log(start);
  while (start > 0) {
    start--;
  }
  console.log('Done!', start);
};
countdown();

// Rest and spread operators
console.log('REST & SPREAD');

const numbers = [1, 10, 99, -5];

// can't pass an array to the Math function.
console.log(Math.max(33, 99, 10, -3));

// spread operator will fix this.
console.log(Math.max(...numbers));

// Rest operator:

// if you wanted to make a new array, you might do this:
const makeOldArray = (arg1: number, arg2: number): number[] => {
  return [arg1, arg2];
};
console.log(makeOldArray(4, 8));

// The problem is that it's an inflexible approach. What if you need 3 numbers? or 1?
// It looks like the same operator, but it is handled differently depending on context.

const makeArray = (...args: number[]) => {
  return args;
};
console.log(makeArray(5));
console.log(makeArray(5, 7, 2, 5));

// If you have other values that need to be handled separately from the rest values, list them first
const makeComplexArray = (name: string, ...args: number[]) => {
  return `The name is ${name} and these are the arguments: ${args}`;
};
console.log(makeComplexArray('Boo', 4, 7, 2));

// Rest tuples
// These two functions are equivalent:

const printInfo = (name: string, age: number) => {
  console.log(`My name is ${name} and I am ${age} years old!`);
};

const printInfo2 = (...info: [string, number]) => {
  console.log(`My name is ${info[0]} and I am ${info[1]} years old!`);
};

// Destructuring

console.log('DESTRUCTURING');

const myHobbies = ['sewing', 'coding'];

// old way:
console.log(myHobbies[0], myHobbies[1]);
const hobby1 = myHobbies[0];
const hobby2 = myHobbies[1];
console.log(hobby1, hobby2);

// new way:
const [hobby11, hobby12] = myHobbies;
console.log(hobby11, hobby12);

// old way
const userData = {
  userName: 'Max',
  age: 27,
};
const userName = userData.userName;
const age = userData.age;
console.log(userName, age);

// new way
// the key names must match the object exactly.
const userData2 = {
  userName2: 'erin',
  age2: 35,
};
const { userName2, age2 } = userData2;
console.log(userName2, age2);

// you can also alias the destructured object properties
const { userName2: myName, age2: myAge } = userData2;
console.log(myName, myAge);

// template literals

// duh.
