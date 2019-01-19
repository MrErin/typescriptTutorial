// Generics

// simple generic
const echo = (data: any) => {
  return data;
};

console.log(echo("Erin"));
console.log(echo(34));
console.log(echo({ name: "Erin", feet: 2 }));

// better generic

// Using "T" is convention (for type) but it could be anything
// T is a variable for whatever type the user has dictated with values
// Note: arrow syntax is convoluted here. I wrote down the old way to do it too:

// function betterEcho<T>(data: T): T { return 'yay'}

// this setup keeps TypeScript aware of the result type. It's better than 'any'

const betterEcho = <T extends {}>(data: T) => {
  return data;
};

console.log(betterEcho("Erin").length);
// won't be able to use the length property here
console.log(betterEcho(34));
// can also specifically type this, but I'm not clear on why you would use brackets instead of the colon
console.log(betterEcho<number>("34"));
console.log(betterEcho({ name: "Erin", feet: 2 }));

// Built-in Generics
// Arrays

const testResults: Array<number> = [1.94, 2.33];
testResults.push(-2.99);
testResults.push("something");
console.log(testResults);

const printAll = <T>(args: T[]) => {
  args.forEach(element => console.log(element));
};

printAll<string>(["apple", "nana", "pear"]);

// Generic Types
// everything after the colon but before the equal sign is a type assignment
// so it's saying echo2 will hold a function where the input is one argument of type T and will return a T
// the betterEcho function is what is being assigned
const echo2: <T>(data: T) => T = betterEcho;

// this allows us to assign strings to a typed function (?)
console.log(echo2<string>("Something Else"));

// Generic Class

// the "extends" is a gneric constraint
// creating two generic types will allow the user to use strings and numbers interchangeably
class SimpleMath<T extends number | string, U extends number | string> {
  baseValue: T;
  multiplyValue: U;
  calculate(): number {
    // Right now, the "T"s in the variables allow the user to pass any type as long as it's consistent
    // putting the "+" in front of the variables here tells TS to cast the input as a number
    return +this.baseValue * +this.multiplyValue;
  }
}

// You won't be able to create a bool type because of the constraint
// const simpleMath = new SimpleMath <boolean>();

// the "string, number" is saying the first value will be a string and the second will be a number
const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
