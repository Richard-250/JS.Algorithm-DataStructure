const fruits = ["apple", "banana", "orange"];

console.log(fruits[0]); 

fruits.push("mango");
console.log(fruits); 

console.log(fruits.length); 



function Queue () {
    collection = [];

    this.print = function() {
        console.log(collection);
    };
     
    this.enqueue = function(element) {
        collection.push(element);
    };

    this.dequeue = function() {
        return collection.shift();
    };

    this.front = function() {
        return collection[0];
    };

    this.size = function() {
        return collection.length;
    };

    this.empty = function() {
        return (collection.length === 0);
    };
}





class Stack {
    constructor() {
        this.top = -1;
        this.items = {};
    }

    get peek() {
        return this.items[this.top];
    }

    push(value) {
        this.top += 1;
        this.items[this.top] = value
    }
}

const stack = new Stack;
console.log("stack:", stack.top)
console.log("items:", stack.items)
stack.push("examplesssss");
stack.push("come on come on");
console.log(stack.items)
console.log(stack.peek)
console.log(stack.top);
console.log(stack.items[1]);