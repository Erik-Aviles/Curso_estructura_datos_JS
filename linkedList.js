const h2 = document.querySelector('h2');
h2.textContent = 'Syngle Linked list(Lista enlazada simple)';
/* 1-- > 2-- > 3-- > 4-- > 5-- > null; */

let singlyLinkedList = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  },
};

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        };
        this.tail = this.head;
        this.length = 1;
  }
    appEnd(value) {
        const node = new Node(value);
        this.tail.next = node;
        this.tail = node;
        this.length ++;
        return this; 
    }

    appStar(value){
        let node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.length ++;
        return this;
    }

} 




let myLinkedList = new MySinglyLinkedList(1);
