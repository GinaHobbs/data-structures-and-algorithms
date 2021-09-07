'use strict';

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder() {
    // Read Data, Go Left, Go Right
    let results = [];

    let _walk = node => {
      results.push(node.value)
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    }

    _walk(this.root);
    return results;
  }

  inOrder() {
    // Go Left, Read Data, Go Right
    let results = [];

    let _walk = node => {
      if (node.left) _walk(node.left);
      results.push(node.value);
      if (node.right) _walk(node.right);
      // same as above with the placement of handling of each node
      // in between our recursive _walk function calls
    }
    
    _walk(this.root);
    return results;
  }

  postOrder() {
    // Go Left, Go Right, Read Data
    let results = [];

    let _walk = node => {
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      results.push(node.value);
    }
    // same as above with the placement of handling of each node
    // after our recursive _walk function calls

    _walk(this.root);
    return results;
  }

  add(value) {
    let results = [];

    let _walk = node => {
      results.push(node.value);
      if (node.left) _walk(node.left)
      if (node.right) _walk(node.right)
    }

    _walk(this.root)
    return results;
  }

  max() {
    let max = null;

    let _walk = node => {
      if (node.value >= max) {
        max = node.value
      }
      if (node.left) _walk(node.left)
      if (node.right) _walk(node.right)
    }

    _walk(this.root)
    return max;
  }
}

module.exports = BinaryTree;