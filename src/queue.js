const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  firstNode;

  constructor() {
    this.firstNode = null;
  }

  getUnderlyingList() {
    return this.firstNode;
  }

  enqueue(value) {
    const node = new ListNode(value);

    let currentNode = this.firstNode;
    while (currentNode.next != null) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
  }

  dequeue() {
    const result = this.firstNode.value;
    this.firstNode = this.firstNode.next;
    return result;
  }
}

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
const ff = queue.getUnderlyingList();
console.log(ff);

module.exports = {
  Queue
};
