'use strict';

class Queue {
  constructor() {
    this.length = 0;
    this.next = null;
  }

  enqueue(value) {
    this[this.length] = value;
    this.next = this[0];
    console.log(`next is: ${this.next}`)
    this.length++;

    return this;
  }

  dequeue() {
    delete this[0]
    this.length--;
    
    let j = 1;
    for (let i = 0; i < this.length; i++) {
        this[i] = this[j];
        console.log(this[i])
        j++;
    }
    this.next = this[0];
    console.log(`next is: ${this.next}`)
    delete this[this.length]
  }

  peek() {
    if (this.length !== 0) {
      return this[0];
    } else {
      error = 'the queue is empty';
      return error;
    }
  }

  isEmpty() {
    if (this.length === 0 ) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Queue;