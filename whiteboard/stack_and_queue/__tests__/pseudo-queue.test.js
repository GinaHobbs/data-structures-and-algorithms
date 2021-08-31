'use strict'

const { expect } = require('@jest/globals');
const pseudoQueue = require('../pseudo-queue.js');

describe('Linked Pseudo Queue', () => {

  it('should create an empty pseudo-queue on instantiation', () => {
    let q = new pseudoQueue();
    expect(q.queue.length).toEqual(0);
  })

  it('should populate the pseudo-queue on enqueue', () => {
    let q = new pseudoQueue();
    q.enqueue(1);
    q.enqueue(2);
    expect(q.queue.length).toEqual(2);
  })

  it('should de-populate the pseudo-queue on dequeue', () => {
    let q = new pseudoQueue();
    q.enqueue(1);
    q.enqueue(2);
    q.dequeue();
    expect(q.queue.length).toEqual(1);
    expect(q.queue[0]).toEqual(2)
  })

  it('should throw an error if the queue is empty on dequeue', () => {
    let q = new pseudoQueue();
    expect(q.dequeue()).toEqual('the queue is empty');
  })

})