async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
    console.log('Hello from setTimeout before sleep');
    await sleep(5000);
    console.log('Hello from setTimeout after sleep');
})();

console.log('Hello from index.js');