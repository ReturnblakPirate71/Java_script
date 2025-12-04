// Create an object
let person = {
  name: "Rafi",
  age: 23,
  city: "Dhaka",
  
  // Method
  greet: function() {
      console.log("Hello! My name is " + this.name);
  }
};

// Access properties
console.log(person.name); // Rafi
console.log(person.age);  // 23
console.log(person.city); // Dhaka

// Call method
person.greet(); // Hello! My name is Rafi

console.log(Array.of(person))