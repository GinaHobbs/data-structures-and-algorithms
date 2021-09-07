'use strict';

const BT = require('./binary-tree.js');
const Node = require('./node.js');

let tree = new BT();

tree.root = new Node(1)
tree.root.left = new Node(2)
tree.root.right = new Node(3)
tree.root.left.left = new Node(4)
tree.root.left.right = new Node(5)
tree.root.right.left = new Node(6)
tree.root.right.right = new Node(7)


console.log('Binary Tree:', tree);
console.log(tree.contains(2))