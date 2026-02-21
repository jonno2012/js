function example(x: string | number, y: string | boolean) {
    // if x and y are the same type, both values must be strings. TS can figure this out
    if (x === y) {
      // We can now call any 'string' method on 'x' or 'y'.
      x.toUpperCase();
      y.toLowerCase();
    } else {
      console.log(x);
      console.log(y);
    }
  }