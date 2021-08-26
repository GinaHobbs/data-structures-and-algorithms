'use strict';

const LinkedList = require('./ll.js');

let ll1 = new LinkedList();
let ll2 = new LinkedList();

ll1.append(1);
ll1.append(2);
ll1.append(3);
ll2.append(4);
ll2.append(5);
ll2.append(6);
ll1.toString();
ll2.toString();
ll2.zipLists(ll1, ll2).toString();
