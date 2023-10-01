/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val)
    if (this.head == null) this.head = newNode;
    if (this.tail != null) this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (this.head == null) this.tail = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    let current = this.head;
    if (current == null) return null;
    let prevNode = null;
    while (current != null) {
      if (current.next == null) {
        this.tail = prevNode;
        prevNode == null ? this.head = null : prevNode.next = null;
        this.length--;
        return current.val;
      }
      prevNode = current;
      current = current.next;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    const firstNode = this.head
    if (firstNode == null) return null;
    if (firstNode == this.tail) this.tail = null;
    this.head = firstNode.next;
    this.length--;
    return firstNode.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currentIdx = 0;
    let currentNode = this.head;
    while (currentNode != null) {
      if (currentIdx == idx) {
        return currentNode.val;
      }
      currentIdx++;
      currentNode = currentNode.next;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currentIdx = 0;
    let currentNode = this.head;
    while (currentNode != null) {
      if (currentIdx == idx) {
        currentNode.val = val;
      }
      currentIdx++;
      currentNode = currentNode.next
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) return;
    if (idx == 0) return this.unshift(val);
    if (idx == this.length) return this.push(val);

    let currentIdx = 1;
    let currentNode = this.head.next;
    let prevNode = this.head;
    while (currentNode != null) {
      if (currentIdx == idx) {
        const newNode = new Node(val);
        prevNode.next = newNode;
        newNode.next = currentNode;
        this.length++;
        break
      }
      currentIdx++;
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx > this.length) return;
    if (idx == 0) return this.shift();
    if (idx == this.length) return this.pop();

    let currentIdx = 1;
    let currentNode = this.head.next;
    let prevNode = this.head;
    while (currentNode != null) {
      if (currentIdx == idx) {
        prevNode.next = currentNode.next;
        this.length--;
        return currentNode.val;
      }
      currentIdx++;
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    let sum = 0;
    let currentNode = this.head;
    while (currentNode != null) {
      sum += currentNode.val;
      currentNode = currentNode.next
    }
    return sum / this.length || 0;
  }
}

module.exports = LinkedList;
