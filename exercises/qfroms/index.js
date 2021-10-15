// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.stack = new Stack();
    this.stackReversed = new Stack();
  }

  add(item) {
    this.stack.push(item);
  }

  popItemsOntoOtherStackReversed(fromStack, toStack) {
    while(fromStack.peek()) {
      toStack.push(fromStack.pop());
    }
  }

  getItemFromBottomOfStack(opts={}) {
    this.popItemsOntoOtherStackReversed(this.stack, this.stackReversed);
    const item = opts.remove ? this.stackReversed.pop() : this.stackReversed.peek();
    this.popItemsOntoOtherStackReversed(this.stackReversed, this.stack);
    return item;
  }

  remove() {
    return this.getItemFromBottomOfStack({ remove: true });
  }

  peek() {
    return this.getItemFromBottomOfStack();
  }
}

module.exports = Queue;
