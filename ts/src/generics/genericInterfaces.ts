interface GenericIdentityFn<Type> {
    (arg: Type): Type;
  }

  function IdString<Type>(arg: Type): Type {
    return arg;
  }

let myIDString: GenericIdentityFn<string> = IdString;

console.log(myIDString("hello4"));


interface GenericIdentityyFn2 {
    <Type>(arg: Type): Type;
}

let myIDString2: GenericIdentityyFn2 = IdString;

console.log(myIDString2("hello5"));