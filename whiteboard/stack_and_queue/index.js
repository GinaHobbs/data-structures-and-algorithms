const Stack = require('./stack.js');
const Queue = require('./queue.js');

let stack = new Stack();
// console.log(stack.push(1))
// console.log(stack.push(2))
// console.log(stack.push(3))
// console.log(stack.pop());
// console.log(stack)
// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.isEmpty())
// console.log(stack.peek());

let queue = new Queue();
console.log(queue.enqueue(1))
console.log(queue.enqueue(2))
console.log(queue.enqueue(3))
console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue);
console.log(queue.dequeue());
console.log(queue);


