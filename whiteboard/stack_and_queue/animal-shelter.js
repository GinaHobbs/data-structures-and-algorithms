'use strict';

class AnimalShelter {
  constructor() {
    this.length = 0;
    this.next = null;
  }

  enqueue(animal) {
    this[this.length] = animal;
    this.next = this[0];
    this.length++;

    return this;
  }

  dequeue(pref) {
    for (let i=1; i < this.length; i++){
      if (this[i].name = pref) {
        console.log(this[i].name);
        delete this[i];
        this.length--;
        break;
      }
    }
    
    let j = 1;
    for (let i = 0; i < this.length; i++) {
      if (this[j]) {
        this[i] = this[j];
      }        
      j++;
    }
    this.next = this[0];
    delete this[this.length]
    return this;
  }
}

module.exports = AnimalShelter;