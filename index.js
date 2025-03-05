// Stack DataStructure


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

   
// Removes and returns the value at the end of the stack
this.pop = function() {
    if(this.count === 0) {
        return undefined;
    }

    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result
}

this.size = function() {
    return this.count
}

this.peek = function() {
    return this.storage[this.count-1];
}
};


// example usage:
const myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);

console.log("StackStorage: ",myStack.storage); // { '0': 10, '1': 20, '2': 30 }
console.log("StackCount: ", myStack.count);   // 3
console.log("peek: ", myStack.peek());
console.log("Last Pushed Element:", myStack.pop());
console.log("StackSize: ", myStack.size())


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
  
// Sets DataStructures

const numbers = new Set([1, 2, 3, 4, 4, 5]);
console.log(numbers); // Output: Set(5) { 1, 2, 3, 4, 5 }

const colors = new Set(["red", "green", "blue"]);
for (let color of colors) {
    console.log(color);
}
const colorArray = [...colors];
console.log(colorArray); // Output: ["red", "green", "blue"]

// UseCase 1
const arr = [1, 2, 3, 3, 4, 5, 5, 6];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // Output: [1, 2, 3, 4, 5, 6]


// example build of simple Set data structure for better understand


class CustomSet {
  constructor() {
      this.items = {}; // Using an object to store unique elements
  }

  add(value) {
      if (!this.has(value)) {
          this.items[value] = value; // Store value as key (ensuring uniqueness)
      }
  }

  has(value) {
      return this.items.hasOwnProperty(value);
  }

  delete(value) {
      if (this.has(value)) {
          delete this.items[value];
          return true;
      }
      return false;
  }

  size() {
      return Object.keys(this.items).length;
  }

  clear() {
      this.items = {};
  }

  values() {
      return Object.valuess(this.items);
  }
}

// Example usage
const mySet = new CustomSet();
mySet.add(10);
mySet.add(20);
mySet.add(10); // Duplicate, ignored
console.log(mySet.values()); // Output: [10, 20]
console.log(mySet.has(10)); // true
mySet.delete(10);
console.log(mySet.values()); // Output: [20]
console.log(mySet.size()); // Output: 1
