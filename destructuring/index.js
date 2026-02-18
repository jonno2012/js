const arr = [10, 20, 30];

// const first = arr[0];
// const second = arr[1];

// can be written as:
const [first, second] = arr;

console.log(first, second);


const [x, , z] = [10, 20, 30]; // skipping the second element

console.log(z); // 30

// default values]
const [a = 1, b = 2] = [10];

console.log(a); // 10
console.log(b); // 2 (default used)


const [head, ...tail] = [1, 2, 3, 4, 5];
console.log(head); // 1
console.log(tail); // [2, 3, 4, 5]

const e = { email: 'test@test.com', name: 'John' };

const { email, name } = e;

// renaming variables
const { email: e1, name: n1 } = e;
console.log(e1); // test@test.com

// default values
const { role = "user" } = e;
console.log(role); // "user"

// rest properties
const { email2, ...rest } = e;
console.log(rest); // { age: 35 }


// Nested Destructuring

const user = {
    name: "Jon",
    address: {
      city: "London",
      postcode: "SW1"
    }
  };
  
  const {
    address: { city }
  } = user;
  
  console.log(city); // "London"
  