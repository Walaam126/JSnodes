class Node{
    constructor(groupSize, next=null){
      this.groupSize = groupSize;
        this.next = next;
    }
  }

class Queue {
    constructor(limit = 5) {
        this.front = null;
        this.back = null;
        this.length = 0;
        this.limit = limit;
    }

    isFull = () => this.length === this.limit;
  
    isEmpty = () => this.length === 0;
  
    peek = () => (this.isEmpty() ? `Queue Underflow` : this.front.groupSize);
  
    enqueue = (groupSize) => {
      if (this.isFull()) {
        console.log("Queue Overflow");
      } else {
        const newNode = new Node(groupSize);
        if (this.isEmpty()) {
          this.front = newNode;
          this.back = newNode;
        } else {
          this.back.next = newNode;
          this.back = newNode;
          }
          let waitTime = newNode.groupSize * 30; //wait time is by secondes
          this.length+=waitTime;
      }
    };

    dequeue = () => {
        if (this.isEmpty()) {
          console.log("Queue Underflow");
        } else {
            const removed = this.front;
            let waitTime = removed.groupSize * 30;
          if (this.length - waitTime === 0 ) {
            this.front = null;
            this.back = null;
          } else {
            this.front = removed.next;
          }
          this.length-=waitTime;
          return removed.groupSize;
        }
      };


}
addgroup = (ride,groupSize) => {
    while (groupSize > 0) {
        if (groupSize > 12)
            ride.enqueue(12);
        else
            ride.enqueue(groupSize);
        groupSize-=12;
    }
}

// print the waiting time for the queue
// add 4 groups to the queue (the number of people in each group is up to you)
// print the waiting time for the queue
// let the people next in line go into the ride (print out the group size)
// print the waiting time for the queue

const ride = new Queue(9000);
console.log(`Current waiting time ${Math.floor(ride.length / 60)} minutes and ${ride.length - Math.floor(ride.length / 60) * 60} secondes `); 
addgroup(ride, 2);
addgroup(ride, 1);
addgroup(ride, 14);
addgroup(ride,4);
console.log(`Current waiting time ${Math.floor(ride.length / 60)} minutes and ${ride.length - Math.floor(ride.length / 60) * 60} secondes `); 
console.log(`to go into the ride: ${ride.dequeue()} people`); 
console.log(`Current waiting time ${Math.floor(ride.length / 60)} minutes and ${ride.length - Math.floor(ride.length / 60) * 60} secondes `); 

