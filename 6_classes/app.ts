class Person {
  // the "public" is implied
  // it allows other things to access the property
  public name: string;
  // private properties are only accessible within the class.
  //   It cannot be accessed by child types
  private type: string = 'feminist';
  // protected properties are only accessible within the class or from within any
  // classes that inherit from this class
  protected age: number = 47;

  constructor(name: string, public userName: string) {
    this.name = name;
  }

  printAge() {
    console.log(this.age);
    this.setType('queen feminist');
  }

  private setType(type: string) {
    this.type = type;
    console.log(this.type);
  }
}

const person = new Person('Amy', 'Amez235');
console.log(person);
person.printAge();
// won't work because the function is now private
// person.setType('amazing feminist');

// Inheritance
class Erin extends Person {
  name = 'Erin';
}
// Have to pass a name and username because of the constructor on Person.
// Whatever you pass as a name will be overwritten by what's set as the name in "Erin"
const erin = new Erin('MrErin', 'erin');
console.log(erin);

// Constructor

class Oz extends Person {
  constructor(userName: string) {
    // always have to call super because it calls the parent constructor
    super('Oz', userName);
    this.age = 6;
  }
}

const oz = new Oz('ozzy');

// Getters and Setters
// these are used to control access to properties and to ensure some criteria are
// met before assigning or returning a value
class Plant {
  // use the underscore here to differentiate from the getter and setter properties
  private _species: string = 'default';

  get species() {
    return this._species;
  }

  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    } else {
      this._species = 'default';
    }
  }
}

let plant = new Plant();
console.log(plant.species);
plant.species = 'AB';
console.log('plant.species');
plant.species = 'Dodo Plant';
console.log('plant.species');

// Static Properties & Methods

class Helpers {
  // you put the "static" keyword here so you can access the property without creating an
  // instance of the class.
  static PI: number = 3.14;

  static calcCircumference(diameter: number): number {
    return this.PI * diameter;
  }
}

// this code would not work without the static keyword
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));

// Abstract Classes

// These classes cannot be instantiated, only inherited
// Use this to provide basic setup for more specialized classes
abstract class Project {
  projectName: string = 'MyProject';
  budget: number = 40;

  // an abstract method is basically a placeholder for the logic you will have to specify
  // when extending a class from this one
  abstract changeName(name: string): void;

  calcBudget() {
    return this.budget * 2;
  }
}

class ITProject extends Project {
  changeName(name: string): void {
    this.projectName = name;
  }
}
// Can't instantiate an abstract class
// let cantDoIt = new Project()
let newProject = new ITProject();
console.log(newProject);
newProject.changeName('My Awesome IT Project');
console.log(newProject);

// private constructors
// this allows you to set up a class that can only have one instance at any given
// time during runtime
class OnlyOne {
  private static instance: OnlyOne;

  private constructor(public name: string, public readonly filbert: number) {}

  static getInstance() {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne('The Only One', 87);
    }
    return OnlyOne.instance;
  }
}
// Can't do this because it would create a second instance of the class
// let wrong = new OnlyOne('The Only One');
let right = OnlyOne.getInstance();

// readonly properties
// if you don't specify a setter but only a getter, it would make the property readonly
// another way to do that is add "readonly" in front of the property declaration

console.log(right.name);
// because name is a public property, it can be set from the outside
right.name = 'Something else';
// can't do this though.
// right.filbert = 54
