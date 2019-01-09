// Created by running the command below in the terminal
// tsc --outfile app2.js circleMath.ts rectangleMath.ts app.ts

var MyMaths;
(function(MyMaths) {
  var BI = 4.14;
  MyMaths.calculateCircumference = function(diameter) {
    return diameter * BI;
  };
})(MyMaths || (MyMaths = {}));
var MyMaths;
(function(MyMaths) {
  MyMaths.calculateRectangle = function(width, length) {
    return width * length;
  };
})(MyMaths || (MyMaths = {}));
// You use namespaces to separate things and 'keep from polluting the global namespace'
// For example, I've created 1736 versions of a "Person" class on the global namespace
// Separating them would stop a lot of the errors in the files.
var MyMath;
(function(MyMath) {
  var BI = 4.14;
  MyMath.calculateCircumference = function(diameter) {
    return diameter * BI;
  };
  MyMath.calculateRectangle = function(width, length) {
    return width * length;
  };
})(MyMath || (MyMath = {}));
var calculateCircumference = function(color) {
  return 'this is the prettiest color of all: ' + color;
};
console.log(MyMath.calculateRectangle(10, 20));
console.log(MyMath.calculateCircumference(7));
// Calculate circumference is on the global namespace so it can be an entirely different
// function from the one in MyMath.
console.log(calculateCircumference('fuchsia'));
// This will error out
// console.log(calculateCircumference(7))
