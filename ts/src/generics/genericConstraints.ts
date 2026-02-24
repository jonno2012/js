interface Lengthwise {
    length: number;
  }
   
  function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
  }


  function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
  }
   
  let x = { a: 1, b: 2, c: 3, d: 4 };
   
  getProperty(x, "a");
  getProperty(x, "m");