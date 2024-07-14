function nodeFactory(value) {
  return {
    value: value,
    next: null,
  };
}

function LinkedList() {
  return {
    head: null,
    tail: null,
    length: 0,

    append(value) {
      const node = nodeFactory(value);
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        this.tail = node;
      }
      this.length++;
    },

    prepend(value) {
      const node = nodeFactory(value);
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = this.head;
        this.head = node;
      }
      this.length++;
    },

    size() {
      return this.length;
    },

    atHead() {
      return this.head;
    },

    atTail() {
      return this.tail;
    },

    at(index) {
      if (index >= this.length) {
        return null;
      }
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      return current;
    },

    pop() {
      if (!this.head) {
        return null;
      }
      if (this.head === this.tail) {
        const node = this.head;
        this.head = null;
        this.tail = null;
        this.length--;
        return node;
      }
      let current = this.head;
      let previous = null;
      while (current.next) {
        previous = current;
        current = current.next;
      }
      previous.next = null;
      this.tail = previous;
      this.length--;
      return current;
    },

    contains(value) {
      let current = this.head;
      while (current) {
        if (current.value === value) {
          return true;
        }
        current = current.next;
      }
      return false;
    },

    find(value) {
      let current = this.head;
      while (current) {
        if (current.value === value) {
          return current;
        }
        current = current.next;
      }
      return null;
    },

    toString() {
      let current = this.head;
      let str = "";
      while (current) {
        str += current.value + " ";
        current = current.next;
      }
      return str;
    },

    insertAt(index, value) {
      if (index >= this.length) {
        return null;
      }
      const node = nodeFactory(value);
      if (index === 0) {
        node.next = this.head;
        this.head = node;
        this.length++;
        return;
      }
      let current = this.head;
      let previous = null;
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }
      node.next = current;
      previous.next = node;
      this.length++;
    },

    deleteAt(index) {
      if (index >= this.length) {
        return null;
      }
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
        this.length--;
        return current;
      }
      let previous = null;
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
      this.length--;
      return current;
    },
  };
}

const Family = LinkedList();
Family.append("John");
Family.append("Jane");
Family.append("Mary");
Family.append("Peter");
Family.prepend("Joseph");
Family.pop();

console.log(Family);
console.log(Family.at(2));
