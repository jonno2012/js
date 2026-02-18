import { myPromise } from './async-utils.js';

async function myAsyncFunction() {
    // do something that takes a long time
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log('Hello from setTimeout after sleep');
}

myAsyncFunction();

console.log('Hello from index.js');

myPromise.then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
}).finally(() => {
    console.log('Promise finished');
});
