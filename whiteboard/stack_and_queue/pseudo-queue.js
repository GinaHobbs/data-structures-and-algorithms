'use strict'
const Stack = require('./stack.js');

class pseudoQueue {
  constructor() {
    this.queue = new Stack()
  }

  enqueue(value) {
    this.queue.push(value)
    return this;
  }

  dequeue() {
    let error = ''
    if (this.queue.length === 0) {
      error = 'the queue is empty';
      return error;
    }
    if (this.queue.length === 1) {
      this.queue.pop();
      return this;
    }
    let tempQueue = new Stack()
    for (let i = 0; i < this.queue.length;i++) {
      tempQueue.push(this.queue.pop())
    }
    delete this.queue[0]
    this.queue.length--;
    this.queue.push(tempQueue.pop())
    return this;
  }
}

module.exports = pseudoQueue;