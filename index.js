
const letters = [];
const word = "racecar";
const keyWord = "boak";
let  rword = '';
 for (let i = 0; i < word.length; i++) {
letters.push(word[i]);
};
 for (let j = 0; j < keyWord.length; j++) {
letters.push(keyWord[j]);
};


 for (let i = 0; i < keyWord.length; i++) {
rword += letters.pop();
};


console.log("Letters: ", letters);
console.log("rword: ", rword)

if (rword === word || keyWord) {
  console.log("rword: is a palindrome.");
}
else {
  console.log("rword: is not a palindrome.");
}

// Creates a stack

const Stack = function() {
   this.count = 0;
   this.storage = {};

   // Adding value onto the end of the stack
   this.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
   }

};


// constructor function example 1
function Name(name) {
    this.names = name;
  }
  const person = new Name('Alice');
  console.log(person.names); // Logs "Alice"

// constructor functions example 2
  function Person(name, age ) {
    this.name = name;
    this.age = age;
  
    this.greet = function () {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    };
  }
  
  // Creating an instance
  const person1 = new Person('Alice', 25);
  person1.greet();
  


  