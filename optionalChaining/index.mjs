const user = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    }
}

console.log(user.address.city); // New York
console.log(user.address.postcode); // undefined

// optional chaining.  will not throw an error if the profile property is not found
console.log(user.profile?.username); // undefined