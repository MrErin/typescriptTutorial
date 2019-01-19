// Decorators
// A decorator is a function that can be appended to a class
// It gets one argument: a constructor function for a class

const logged = (constructorFn: Function) => {
  console.log(constructorFn);
};

// To attach a decorator, just put it above the function with the @ sign
// If you comment out the decorator, the log of Peep2 will disappear from quokka
@logged
class Peep2 {
  constructor() {
    console.log("Hi!");
  }
}

// Decorator Factory

const logging = (value: boolean): any => {
  return value ? logged : null;
};

@logging(false)
class Carp {}

// Advanced

const printable = (constructorFn: Function) => {
  constructorFn.prototype.print = function() {
    console.log(this);
  };
};

@logging(true)
@printable
class Zombie {
  name = "Green Zombie";
}

const zombie = new Zombie();
(<any>zombie).print();

// Method decorators
// Property decorators

const editable = (value: boolean) => {
  // the descriptor is something on the javascript object prototype that allows you to configure properties on objects
  return function(
    target: any,
    propName: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.writable = value;
  };
};

const overwritable = (value: boolean) => {
  return function(target: any, propName: string): any {
    const newDescriptor: PropertyDescriptor = {
      writable: value
    };
    return newDescriptor;
  };
};

// class Thing {
//   // property decorator. this prevents anyone from giving a new Thing a name
//   @overwritable(false)
//   thingName: string;
//   constructor(name: string) {
//     this.thingName = name;
//   }
//   @editable(false)
//   calcBudget() {
//     console.log(1000);
//   }
// }

// const project = new Thing("super thing");
// project.calcBudget();

// // this code doesn't throw an error (except in wallaby), but it doesn't run either because the property is not editable
// project.calcBudget = function() {
//   console.log(2000);
// };
// project.calcBudget();

// Parameter decorators

const printInfo = (target: any, methodName: string, paramIndex: number) => {
  //   console.log(
  //     `Target: ${target}, Method Name: ${methodName}, ParamIndex: ${paramIndex}`
  //   );
  console.log("Target", target);
  console.log("methodName", methodName);
  console.log("paramIndex", paramIndex);
};

class Course {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  printStudentNumbers(mode: string, @printInfo printAll: boolean) {
    if (printAll) {
      console.log(100);
    } else {
      console.log(5);
    }
  }
}

const course = new Course("yay course");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);
