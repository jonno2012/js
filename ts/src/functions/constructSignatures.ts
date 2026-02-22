interface SomeObject {
    value: string;
  }
  
  class MyClass implements SomeObject {
    value: string;
  
    constructor(s: string) {
      this.value = s.toUpperCase();
    }
  }
  
  type SomeConstructor = {
    new (s: string): SomeObject;
  };
  
  function fn(ctor: SomeConstructor) {
    return new ctor("hello");
  }
  
  const result = fn(MyClass);
  console.log(result.value); // "HELLO"
  