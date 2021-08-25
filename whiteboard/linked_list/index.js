'use strict';

const LinkedList = require('./ll.js');

let ll = new LinkedList();

ll.append(1);
ll.append(2);
// ll.append(3);
// ll.append(4);
// ll.insert(5);
// console.log(ll);
// console.log(ll.includes(4));
ll.toString();
// ll.insertBefore(1,6)
// ll.toString();
// ll.insertBefore(1,7)
// ll.toString();
// ll.insertBefore(6,8)
// ll.toString();
ll.insertAfter(2,6)
ll.toString();
// ll.delete(2);
ll.toString();
ll.kth(3);
