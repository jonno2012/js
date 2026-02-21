import express from 'express';
import names from '#types/names';
import numbers from '#types/numbers';

console.log('Hello World');

const message = 'Hello World';
console.log(message.toUpperCase());

names.forEach((s) => {
    console.log(s.toUpperCase());
});

// numbers.forEach((s) => {
//     console.log(s.toUpperCase()); // inferred that type is number
// });