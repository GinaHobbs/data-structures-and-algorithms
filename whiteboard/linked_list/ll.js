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

    console.log('inserting.....')
    if (!this.head) {
      this.head = node;
    }

    if (this.head) {
      console.log(this.head.value)
      let oldHeadNode = this.head;

      this.head = node;
      this.head.next = oldHeadNode;
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

  insertBefore(value, newValue) {
    let node = new Node(newValue);

    if (this.includes(value) === true) {
      console.log('value found');

      let current = this.head;

      //if head.next doesn't exist use the insert function defined before for inserting previous to head
      if (this.head) {
        this.insert(node.value)
      } else {
        //while current.next exists, the head has a next now...
        while (current.next) {
          //step through each link individually and look at the next node.
          //we'll stay on the first node and always look ahead
          //if the current value = the value we're looking for
          if (current.next.value === value) {
            //current -> NEW NODE -> current.next
            //set old current.next into a var
            let oldCurrentNext = current.next;
            //set current.next to point to new node
            current.next = node;
            //set the next node in current.next to point to old node
            current.next.next = oldCurrentNext
            //break out of the loop
            break;
          }
          //move to the next node
          current = current.next;
        }
      }
    }
  }

  insertAfter(value, newValue) {
    let node = new Node(newValue)

    if (this.includes(value) === true) {
      let current = this.head

      if (!this.head.next) {
        this.head.next = node;
      }

      while (current.next) {
        if (current.value === value) {
          //store next node and then place it on the next of the new node
          let nextNode = current.next;
          current.next = node;
          node.next = nextNode;
        }
        current = current.next;
      }

      if (!current.next) {
        current.next = node;
      }

    }
  }

  delete(value) {

    if ((!this.head.next) && (this.head.value === value)) {
      this.head = null;
    }

    if ((this.head.next) && (this.head.value === value)) {
      let oldHead = this.head;
      this.head = this.head.next;
      oldHead.next = null;
    }

    let current = this.head;

    while (current.next) {
      //current node - > next node checked for deletion -> next node
      if (current.next.value === value) {
        //set the current node's next to the next node's next
        // current.next = current.next.next.next;
        // current.next.next = null;
      }
    }
  }

  kth(k) {
    let error = "";

    if (!this.head) {
      error = "there are no nodes";
      return error;
    }

    if (k < 0) {
      error = "k is less than 1";
      return error;
    }

    //get the length of the linked list
    //after the length is known, subtract k from the length
    //store the value; this is the node, using normal numbering that has the value we want
    //iterate through linked list to that node then return the value
    if ((!this.head.next) && (k === 0)) {
      console.log(this.head.value);
    } else if ((!this.head.next) && (k > 0)) {
      error = 'there is only one node in the list'
      return error;
    }

    if (this.head) {
      let current = this.head;
      let listLength = 1;

      while (current.next) {
        listLength += 1;
        current = current.next;
      }

      if (k === listLength) {
        error = "k is the same length as the linked list";
        return error;
      }

      let fromTail = listLength - k;

      if (fromTail < 0) {
        error = "k is larger than the linked list"
        return error; 
      }

      current = this.head
      let i = 1;

      while (current.next) {
        if (i === fromTail) {
          console.log(current.value)
          return current.value;
        }
        current = current.next
        i++
      }

      if ((!current.next) && (k === 0)){
        console.log(current.value);
        return current.value;
      }
    }
  }

  zipLists(list1, list2) {
    let ll1Arr = [];
    let ll2Arr = [];
    let error = '';

    if (!list1.head) {
      return list2;
    }

    if (!list2.head) {
      return list1;
    }

    if (list1.head) {
      let current = list1.head;

      ll1Arr.push(current.value);

      while (current.next) {
        if (current !== list1.head) {
          ll1Arr.push(current.value);
        }
        current = current.next;
      }

      ll1Arr.push(current.value);
    }

    if (list2.head) {
      let current = list2.head;

      ll2Arr.push(current.value);

      while (current.next) {
        if (current !== list2.head) {
          ll2Arr.push(current.value);
        }
        current = current.next;
      }

      ll2Arr.push(current.value);
    }

    let newArr = []

    if (ll1Arr.length > ll2Arr.length) {
      for (let i = 0 ; i < ll1.length; i++) {
        newArr.push(ll1Arr[i])
        if (ll2Arr[i]) {
          newArr.push(ll2Arr[i])
        }
      }
    } else if (ll1Arr.length < ll2Arr.length) {
      for (let i = 0 ; i < ll2.length; i++) {
        newArr.push(ll2Arr[i])
        if (ll1Arr[i]) {
          newArr.push(ll1Arr[i])
        }
      }
    } else {
      for (let i = 0 ; i < ll1Arr.length; i++) {
        newArr.push(ll1Arr[i])
        if (ll2Arr[i]) {
          newArr.push(ll2Arr[i])
        }
      }
    }

    let newll = new LinkedList()
    for (let j = 0 ; j < newArr.length; j++) {
      newll.append(newArr[j])
    }
    
    return newll;

  }

}

module.exports = LinkedList;