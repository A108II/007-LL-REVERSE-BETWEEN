class Node {
  constructor(value){
      this.value = value;
      this.next = null;
  }
}

class LinkedList {
  constructor(value) {
      const newNode = new Node(value);
      this.head = newNode;
      this.length = 1;
  }

  printList() {
      let temp = this.head;
      let output = "";
      if (temp === null) {
          console.log("empty");
          return;
      }
      while (temp !== null) {
          output += String(temp.value);
          temp = temp.next;
          if (temp !== null) {
              output += " -> ";
          }
      }
      console.log(output);
  }

  getHead() {
      if (this.head === null) {
          console.log("Head: null");
      } else {
          console.log("Head: " + this.head.value);
      }
  }

  getLength() {
      console.log("Length: " + this.length);
  }

  makeEmpty() {
      this.head = null;
      this.length = 0;
  }

push(value) {
  const newNode = new Node(value);
  if (!this.head) {
    this.head = newNode;
  } else {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }
  this.length++;
}

reverseBetween(m, n) {

    if(this.head === null) return;

    const dummyNode = new Node(0);
    dummyNode.next = this.head;
    let previous = dummyNode;

    for(let i = 0; i < m; i++) {
        previous = previous.next;
    }
    let current = previous.next;

    for(let i = 0; i < n - m; i++) {
        const temp = current.next;
        current.next = temp.next;
        temp.next = previous.next;
        previous.next = temp;
    }

    this.head = dummyNode.next;
}

}

module.exports = LinkedList;