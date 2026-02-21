let x; // undefined
const test = () => {};

let test2 = test();
console.log(test2); // undefined

// if there is no value assigned to a variable, it is undefined.
// if there is no value assigned to a function, it returns undefined.
// if there is no value assigned to an object, it is undefined.
// if there is no value assigned to an array, it is undefined.
// if there is no value assigned to a string, it is undefined.
// if there is no value assigned to a number, it is undefined.
// if there is no value assigned to a boolean, it is undefined.
// if there is no value assigned to a symbol, it is undefined.
// if there is no value assigned to a bigint, it is undefined.
// if there is no value assigned to a null, it is null.
// if there is no value assigned to a undefined, it is undefined.

const myNull = null;
// this means that you intentionally set the value to null.
// null is actually an object. This is a legacy bug.


// if you want to check for either null or undefined, you can use the following:
if (myNull == null) {
    console.log('myNull is either null or undefined');
}
// note this is one of the few times where using == is deemed to be acceptable.

// if you use === it will check for the exact value and type. of either null or undefined.