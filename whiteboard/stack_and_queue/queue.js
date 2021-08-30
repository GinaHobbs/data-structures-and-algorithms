'use strict';

class Queue {
  constructor() {
    this.length = 0;
    this.next = null;
  }

  enqueue(value) {
    this[this.length] = value;
    this.length++;

    return this;
  }

  dequeue() {
    //remove front of queue and set the next item in queue to be at spot 0. should reassign everything after to be at one less spot. A for loop?
    //maybe work with another queue, a temp queue?
    for (let i = 0; i < this.length; i++) {
      if (i !== 0) {
        
      }
    }

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