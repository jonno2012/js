class Email {
    constructor(value) {
      if (!value.includes("@")) {
        throw new Error("Invalid email");
      }
      this.value = value;
      Object.freeze(this); // enforce immutability
    }
  
    toString() {
      return this.value;
    }
  }

  const email = new Email("test@test.com");
  console.log(email.toString());
  console.log(email.value); // undefined
  console.log(email); // Email { value: 'test@test.com' }
  email.value = "test2@test.com"; // TypeError: Cannot assign to read only property 'value'
  console.log(email.value); // undefined
  console.log(email); // Email { value: 'test@test.com' }
  email.toString = () => "test@test.com"; // TypeError: Cannot assign to read only property 'toString'
  console.log(email.toString()); // test@test.com
  console.log(email); // Email { value: 'test@test.com' }