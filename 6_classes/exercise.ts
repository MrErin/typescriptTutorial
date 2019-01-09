// Exercise 1 - How was your TypeScript Class?
class Car {
  name: string = 'Little Red';
  acceleration: number = 3;

  constructor(name: string, acceleration: number) {
    this.name = name;
    this.acceleration = acceleration;
  }

  honk() {
    console.log('Toooooooooot!');
  }

  accelerate(speed: number) {
    this.acceleration = this.acceleration * speed;
  }
}
let car = new Car('BMW', 5);
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2 - Two objects, based on each other ...
class Shape {
  width = 0;
  length = 0;
  constructor(width: number, length: number) {
    this.width = width;
    this.length = length;
  }
}
class Rectangle extends Shape {
  color = 'red';
  constructor(color: string) {
    super(5, 2);
    color = color;
  }
  calcSize() {
    return this.width * this.length;
  }
}

let square = new Rectangle('blue');

console.log(square);
console.log(square.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class Peep {
  private _firstName: string = 'meep';

  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    if (value.length > 3) {
      this._firstName = value;
    } else {
      this._firstName = 'beep';
    }
  }
}

let creep = new Peep();
creep.firstName = 'eep';
console.log(creep.firstName);
creep.firstName = 'Ma';
console.log(creep.firstName);
creep.firstName = 'Maximilian';
console.log(creep.firstName);
