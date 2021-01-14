class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(data) {
    this.head = new Node(data);
  }

  insertBeginning = (data) => {
    const newNode = new Node(data, this.head);
    this.head = newNode;
  };

  traverse = () => {
    let arrayData = [];
    let current = this.head;
    while (current) {
      arrayData.push(current.data);
      current = current.next;
    }
    return arrayData;
  };

  remove = (data) => {
    let current = this.head;
    if (current.data === data) {
      // Deleting node at the beginning
      this.head = current.next;
    } else {
      // Deleting node NOT in the beginning
      while (current) {
        let nextNode = current.next;
        if (nextNode.data === data) {
          // node found
          current.next = nextNode.next;
          current = null;
        } else {
          // node not found
          current = nextNode;
        }
      }
    }
  };
}

const trip = new LinkedList("Kyoto");
trip.insertBeginning("Hiroshima");
trip.insertBeginning("Tokyo");

console.log(trip.traverse());
trip.remove("Kyoto");
console.log(trip.traverse());