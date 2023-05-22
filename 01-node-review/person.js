// const person = {
//   name: 'John',
//   age: 30,
// };

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greetings() {
    console.log(`My name is ${this.name} and age is ${this.age}`);
  }
}

module.exports = Person;
