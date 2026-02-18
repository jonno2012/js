// in es modules we can use await at the top level of the module
import { sleep } from './async-utils.js';

console.log('Hello from esModules.js before sleep');
await sleep(5000);
console.log('Hello from esModules.js after sleep');