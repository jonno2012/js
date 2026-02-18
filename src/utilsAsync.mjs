function subtractAsync(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Subtracting...");
            resolve(a - b);
        }, 5000);
    });
}

const subtracts = await subtractAsync(100, 97);

export default subtracts;