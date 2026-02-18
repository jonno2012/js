// const { add } = require('./src/utils');
// const { subtract } = require('./src/utilses6');
// import { subtract } from './src/utilses6.mjs';
const subtract = require('./src/utilses6.mjs');
const { sum } = require('./src/utilses6.mjs');



// console.log(add(1, 2));
// console.log(subtract(1, 2));


// `async` is being used here because the `import()` function is asynchronous and returns a promise.
// This allows dynamic importing of ES modules at runtime, which is only possible with modern JavaScript's dynamic import syntax.
// Using `await import(...)` requires the enclosing function to be async, ensuring the code waits for the module to be loaded before proceeding.


(async () => {
    const m = await import('./src/utilsAsync.mjs');
    const { default: subtracts } = m;
    console.log('line 20', subtracts);
})();


(async () => {
    const subtract = await import('./src/utilses6.mjs');
    console.log(subtract.default(1, 2));
})();

console.log(sum(1, 2));