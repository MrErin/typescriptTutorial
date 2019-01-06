let myName = 'Erin';

// myName = 23;

let myAge = 2837;
// myAge = 'two hundred';

let hasHobbies = true;
// hasHobbies = 1;

// If you don't explicitly assign a type, it becomes 'any' type
let myRealAge;
myRealAge = 27;
myRealAge = '27';

let seriouslyMyAge: number;
seriouslyMyAge = 313;

let hobbies: any[] = ['sewing', 'quilting', 'world domination'];
hobbies = [100];
// still can't do this:
// hobbies = 100;

// tuples
// immutable sets of a specific type of input
let address: [string, number] = ['Superstreet', 99];

// can't do this:
// address = [99, 'Superstreet'];

// enums
// this basically creates a new custom type, with autoint based on index
enum Color {
  Gray, //0
  Green = 100, //default would have been 1
  Blue, //default will now be 101
}

let myColor: Color = Color.Green;
console.log(myColor);

// any
let car: any = 'BMW';
console.log(car);
car = { brand: 'BMW', series: 3 };
console.log(car);

// functions
// Adding the type declaration after the arguments indicates the expected return value
const returnMyName = (): string => {
  return myName;
  //   can't do this!
  //   return myAge;
};
console.log(returnMyName());

// void
// the void type indicates that the function will return nothing
const sayHello = (): void => {
  console.log('Hello!');

  // can't do this
  // return myName
};

// argument types
const multiply = (value1: number, value2: number): number => {
  return value1 * value2;
};
console.log(multiply(10, 2));
// can't do this
// console.log(multiply(2, 'Max'));

// function types
// this structures what arguments and return values are expected for the declared function variable
let myMultiply: (val1: number, val2: number) => number;
myMultiply = multiply;
// can't do this
// myMultiply = sayHello;
// myMultiply()
myMultiply(2, 5);

// objects
let userData: { name: string; age: number } = {
  name: 'Boop',
  age: 43,
};

// can't do this
// userData = {
//   a: 'Hello',
//   b: 22,
// };
// or this
// userData = {
//   name: 453,
//   age: 'hey',
// };

// complex object
let complex: { data: number[]; output: (all: boolean) => number[] } = {
  data: [100, 3.99, 10],
  output: function(all: boolean): number[] {
    return this.data;
  },
};

// type aliases
// allows templating of objects, similar to classes

type Complex = { data: number[]; output: (all: boolean) => number[] };

let complex2: Complex = {
  data: [10, 13.99, 103],
  output: function(all: boolean): number[] {
    return this.data;
  },
};

// union types
let myRealRealAge: number | string = 28;
myRealRealAge = '28';

// check types
let finalValue = 'A string';
if (typeof finalValue === 'number') {
  console.log('Final value is a number');
}

// never type
// this is not a function that returns void because it does return something (an error)
// it will never return anything.
// you might use it in parts of code that should never be reached
const neverReturns = (): never => {
  throw new Error('An error!');
};

// nullable types
// can't do this because the variable is interpreted as a number.
// let canBeNull = 12
// canBeNull = null

// this is initialized as undefined
let canAlsoBeNull: number | null;
canAlsoBeNull = null;
canAlsoBeNull = 12;
