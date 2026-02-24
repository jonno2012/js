const basicGen = <T>(arg: T): T => {
    return arg;
}

const val1 = basicGen<string>("hello");
const val2 = basicGen<number>(123);
const val3 = basicGen<string[]>(["hello", "world"]);

console.log(val1);
console.log(val2);
console.log(val3);

function test() {
    return "whatever";
}

const test2 = () => 'Whatever2';

function identity<Type>(arg: Type): Type {
    return arg;
  }
   
  let myIdentity: { <Type>(arg: Type): Type } = identity;

  console.log(myIdentity("hello2"));
console.log(myIdentity);
console.log(identity);
console.log(test);
console.log(test2);


  function whatever<Type>(arg: Type): Type {
    return <Type>arg;
  }
  