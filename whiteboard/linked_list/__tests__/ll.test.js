'use strict';

const LinkedList = require('../ll.js');

describe('Linked List Class', () => {

    it('should create an empty ll on instantiation', () => {
      let list = new LinkedList();
      expect(list.head).toEqual(null);
    })

    it('should be able to append a node to the end of the list', () => {
      let list = new LinkedList();
      // some mock test data to test against
      list.append('first');
      expect(list.head.value).toEqual('first');

      list.append('second');
      expect(list.head.next.value).toEqual('second');

      console.log('our final ll', list);
    })

    // Where k is greater than the length of the linked list
    it('should return an error if k is greater than the linked list length', () => {
      let list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.kth(4)).toEqual('k is larger than the linked list');
    })
    // Where k and the length of the list are the same
    it('should return the value of the head node', () => {
      let list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.kth(3)).toEqual('k is the same length as the linked list');
    })
    // Where k is not a positive integer
    it('should return an error', () => {
      let list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.kth(-1)).toEqual('k is less than 1');
    })
    // Where the linked list is of a size 1
    it('should return the head node if k equals 0', () => {
      let list = new LinkedList();
      list.append(1);
      expect(list.kth(0)).toEqual(list.head.value);
    })
    // “Happy Path” where k is not at the end, but somewhere in the middle of the linked list
    it('should return a value in the middle of the list; this will be the second position of a length of three', () => {
      let list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.kth(1)).toEqual(2);
    })
})