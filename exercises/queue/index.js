// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

// old school class using proptypes
function OldSchoolQueue() {
  this.data = [];
}

OldSchoolQueue.prototype.add = function(record) {
  this.data.unshift(record);
}

OldSchoolQueue.prototype.remove = function() {
  return this.data.pop();
}

// object literal version
const ObjectLiteralQueue = {
  data: [],
  add(record) {
    this.data.unshift(record);
  },
  remove() {
    return this.data.pop();
  }
}

// es6 class version
class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }
}

module.exports = Queue;
