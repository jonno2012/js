function f(n?: number) {
    console.log(n?.toFixed()); // 0 arguments
    console.log(n?.toFixed(3)); // 1 argument
  }

  f(); // OK
f(10); // OK


function defaultArg(n: number = 10) {
    console.log(n.toFixed()); // 0 arguments
    console.log(n.toFixed(3)); // 1 argument
}