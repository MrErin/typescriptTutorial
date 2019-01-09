// Interfaces are typescript structures for objects

const greet = (person: { name: string }) => {
  console.log(`hey, ${person.name}`);
};

const person = {
  // this won't work:
  // firstName: 'Erin',
  name: 'Erin',
  age: 26,
};

greet(person);

interface NamedPerson {
  firstName: string;
  age?: number;
  //   optional property
  favoriteThing?: string;
  //   specifying properties you're not sure the name of
  [propName: string]: any;
  greetMyself(lastName: string): void;
}

const greetAgain = (person: NamedPerson) => {
  console.log(`hey, ${person.firstName}`);
};

// IF you pass object literals directly, you have to provide values for every required property
greetAgain({
  firstName: 'Oz',
  age: 6,
  hairColor: 'brown',
  numberOfFeet: 4,
  greetMyself(lastName: string) {
    console.log(`Hi I'm ${this.firstName} ${this.lastName}`);
  },
});

class Pizazz implements NamedPerson {
  firstName: string;
  age: number;
  favoriteThing: 'peanut butter';
  greetMyself(lastName: string) {
    console.log(`Hi I'm ${this.firstName} ${lastName}`);
  }
}

const jazz = new Pizazz();
jazz.age = 48;
jazz.greetMyself('pinkie pie');

// Function types

interface DoubleValueFunc {
  // this is a function type
  //   it says it is a function that takes two arguments that are numbers and returns a number
  (num1: number, num2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = (val1: number, val2: number) => {
  return (val1 + val2) * 2;
};

console.log(myDoubleFunction(10, 20));

// let myWrongFunction: DoubleValueFunc = (something: string)

// Interface Inheritance

interface AgedPerson extends NamedPerson {
  // age is now required
  age: number;
}

const oldPerson: AgedPerson = {
  age: 826,
  firstName: 'Sadie',
  greetMyself(lastName: string) {
    console.log(lastName);
  },
};

console.log(oldPerson);
