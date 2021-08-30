'use strict';

class Stack {
  constructor() {
    this.length = 0;
    // this.top = true;
  }

  push(value) {
    // this[this.length].top = false
    this[this.length++] = value;
    // this[this.length].top = true
    return this;
  }

  pop() {
    if (this.length === 0) return 'sorry - empty stack';
  
    let result = this[--this.length];
  
    delete this[this.length];
    return result;
  }

  peek() {
    let top = null;
    let error = '';
    if (this.length === 0) {
      error = 'the stack is empty'
      return error
    } else {
      top = this.length - 1
    }
    return this[top];
  }

  isEmpty() {
    if (this.length === 0 ) {
      return true;
    } else {
      return false;
    }
  }

}

module.exports = Stack;