// normal function
function add(a, b) {
    return a + b;
  }


  const addArrow = (a, b) => a + b; // implicit return possible if there is only one statement

  const addArrow2 = (a, b) => { // explicit return required if there is more than one statement
    let initial = a + b;
    return initial * initial;
  }

const singleParam = x => x * x; // no need to wrap in parentheses if there is only one parameter

const noParams = () => 'No params in this arrow function'; // need parentheses if there are no parameters

const multipleParams = (x, y, z) => x * y * z; // need parentheses if there are multiple parameters

const objectReturn = () => ({ name: 'John', age: 30 }); // need parentheses if returning an object


// gotchas

/*
The Real Difference: this

Arrow functions do not have their own this.
They inherit this from the surrounding lexical scope.
This is the most important nuance. */

const person = {
    name: "Jonathan",
    greet: function () {
      console.log(this.name);
    }
  };
  
  person.greet(); // "Jonathan"
  
  const person2 = {
    name: "Jonathan",
    greet: () => {
      console.log(this.name);
    }
  };
  
  person2.greet(); // undefined (or window.name in browser)
  

  // Don’t Use Arrow Functions for Object Methods

//   const imageService = {
//     process: () => {
//       console.log(this.config);
//     }
//   };
  
  // That this won’t refer to imageService.

  // use a normal function instead
  const imageService = {
    process: function () {
      console.log(this.config);
    }
  };

  imageService.process(); // "config"
  
  // That this will refer to imageService.
  
  // Arrow functions and classes

  class User {
    constructor(name) {
      this.name = name;
    }
  
    greet = () => {
      console.log(this.name);
    };
  }
  
  /*
  This works — but:
It creates a new function per instance
It lives on the instance, not the prototype
It can’t be shared */

// Normal method (better for most cases):
class User2 {
    constructor(name) {
      this.name = name;
    }
  
    greet() {
      console.log(this.name);
    }
  }
  

  // arrow functions cannot be constructor functions
  // arrow functions cannot reference the arguments object:

//   const noArgs = () => {
//     console.log(arguments);
//   }

//   noArgs(1, 2, 3); // ReferenceError: arguments is not defined

const test = (...argsss) => console.log(argsss);

test(5,6,7,8,9,10); // [5,6,7,8,9,10]

// Why Arrow Functions Exist
// Mainly to solve the classic callback this problem:

function timer() {
    this.seconds = 0;
    const self = this; // a hacky workaround under the old way of doing things
    setInterval(function () {
        self.seconds++;
        console.log(self.seconds);
    }, 1000);
}

timer(); // NaN

function timer2() {
    this.seconds = 100; // this will be the global object
    setInterval(() => {
        this.seconds++;
        console.log(this.seconds);
    }, 1000);
}

timer2(); // 1, 2, 3, 4, 5, ...

// it restricts the scope of the this keyword to the function itself

// other things to note:
// arrow functions have no prototype
// they do not have their own super keyword
// no own new.target keyword
// no own arguments object
// no own bind, call, or apply methods
// no own toString, valueOf, or toLocaleString methods
// no own constructor property
// no own prototype property
// no own __proto__ property
// no own __defineGetter__ method
// no own __defineSetter__ method

/*
When To Use Arrow Functions (Rule of Thumb)
✅ Use arrow functions for:

Short callbacks
Array methods (map, filter, reduce)
Functional style utilities
When you need lexical this */

/*
❌ Avoid arrow functions for:

Object methods
Class prototype methods (usually)
Constructors
When you rely on dynamic this */