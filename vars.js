// console.log(x); // will not throw an error
// var x = 10;

// console.log(x); // will throw an error
// let x = 10;



// if (true) {
//     let x = 10;
// }

// console.log(x); // will throw an error due to block scope

// let x = 10;
// let x = 20; // will throw an error due to redeclaration

// const shares the same characteristics as let vis a vis block scope and redeclaration.

// const x = 10;
// x = 20; // will throw an error due to redeclaration

const user = {
    name: 'John',
    age: 30,
}

user.name = 'Jane'; // const objects are mutable
console.log(user);

// const user = { // will throw an error due to redeclaration
//     name: 'John',
//     age: 30,
// }

// user = {
//     name: 'Jane',
//     age: 30,
// } // will throw an error due to redeclaration

/*
Modern Best Practice

In modern JavaScript (Node, React, Vue, etc.):
Use const by default
Use let only when reassignment is needed
Avoid var completely

This aligns with:
Functional programming style
Immutability principles

Predictable state management (especially relevant to your frontend work)
*/