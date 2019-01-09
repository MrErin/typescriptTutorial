// to import namespaces:

/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />

// now running the tsc --outfile command will compile everything to one

// You use namespaces to separate things and 'keep from polluting the global namespace'
// For example, I've created 1736 versions of a "Person" class on the global namespace
// Separating them would stop a lot of the errors in the files.
namespace MyMath {
  const BI = 4.14;

  export const calculateCircumference = (diameter: number) => {
    return diameter * BI;
  };
  export const calculateRectangle = (width: number, length: number) => {
    return width * length;
  };

  //   nested namespaces:

  export namespace Triangle {
    export const calculateTriangle = (side1: number, side2: number, side3: number) => {
      return side1 * side1 + side2 * side2 + side3 * side3;
    };
  }
}

const calculateCircumference = (color: string) => {
  return `this is the prettiest color of all: ${color}`;
};

console.log(MyMath.calculateRectangle(10, 20));
console.log(MyMath.calculateCircumference(7));

// Calculate circumference is on the global namespace so it can be an entirely different
// function from the one in MyMath.
console.log(calculateCircumference('fuchsia'));
// This will error out
// console.log(calculateCircumference(7))

// To access nested namespaces:
console.log(MyMath.Triangle.calculateTriangle(4, 2, 6));
