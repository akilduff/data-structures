class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.lengthCounter = 0;
  }

  pop() {
    var poppedVal = this.storage[this.lengthCounter - 1];
    delete this.storage[this.lengthCounter - 1];
    this.lengthCounter > 0 ? this.lengthCounter-- : this.lengthCounter = 0;
    return poppedVal;
  }

  push(value) {
    this.storage[this.lengthCounter] = value;
    this.lengthCounter++;
  }

  size() {
    return this.lengthCounter;
  }
}