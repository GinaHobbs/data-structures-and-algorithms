'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;   
  }

  append(value) {
    let node = new Node(value);

    if(!this.head) {
      this.head = node;
    } else {
      // this is where the traversal happens - HINT HINT
      let current = this.head;

      // this is the core/fundamental way to traverse a LL
      while(current.next) {
        current = current.next;
      }

      current.next = node;
    }

    // give me back the linked list
    return this;
  }

  includes(value) {
    if (!this.head) {
      return false;
    } 
    else {
      let current = this.head;
      if (current.value === value) {
        return true;
      }
      else {
        while (current.next){
          if (current.value === value) {
            return true;
          } else if (current.value !== value) {
            current = current.next;
          }
        }
        if (current.next === null) {
          if (current.value === value) {
            return true;
          } else {
            return false;
          }
        }
      }
    }
  }

  insert(value) {
    let node = new Node(value)

    if (!this.head) {
      this.head = node;
    }

    if (this.head) {
      let oldHeadNode = this.head;

      this.head = node;
      node.next = oldHeadNode;
    }
  }

  toString() {
    let stringArr = []

    if(!this.head) {
      console.log('the linked list is empty');
    }

    if (!this.head.next) {
      let current = this.head;
      stringArr.push(`{ ${current.value} }`)
      console.log(`{ ${current.value} }`);
    }

    if (this.head.next) {
      let current = this.head

        while (current.next) {
          stringArr.push(`{ ${current.value} } -> `)
          current = current.next
        }
        if ((current !== this.head) && (!current.next)) {
          stringArr.push(`{ ${current.value} } -> `)
          stringArr.push(`{ NULL }`)
        }
    }
    console.log(stringArr.toString());
  }

}

module.exports = LinkedList;