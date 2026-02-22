// void
// The inferred return type is void
function noop(): void {
    return;
  }
  // returns something but somethign doesn't have a value


  // object type - can be functions as well as objects


  // unknow
  function f1(a: any) {
    a.b(); // OK
  }
  function f2(a: unknown) {
    a.b(); // you are not allowed to do anything with a because it is of type unknown
  }


// Conversely, you can describe a function that returns a value of unknown type:
  function safeParse(s: string): unknown {
    return JSON.parse(s);
  }
   
  const someRandomString = '{"name": "John", "age": 30}';
  // Need to be careful with 'obj'!
  const obj = safeParse(someRandomString);


  // never
  function fail(msg: string): never {
    throw new Error(msg);
  }


  // Function
  // The global type Function describes properties like bind, call, apply, 
  // and others present on all function values in JavaScript. It also has the 
  // special property that values of type Function can always be called; these 
  // calls return any:

function doSomething(f: Function) {
  return f(1, 2, 3);
}


// Rest parameters

// A rest parameter appears after all other parameters, and uses the ... syntax:

function multiply(n: number, ...m: number[]) {
    return m.map((x) => n * x);
  }
  // 'a' gets value [10, 20, 30, 40]
  const a = multiply(10, 1, 2, 3, 4);