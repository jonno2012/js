async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let myPromise = new Promise((resolve, reject) => {
    const ok = true;

    if (ok) {
        resolve(`Promise resolved`);
    } else {
        reject(`Promise rejected`);
    }
});

export { sleep, myPromise };