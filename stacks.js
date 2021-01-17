class Node {
    constructor(color,number,next = null) {
        this.color = color;
        this.number = number;
        this.next = next;
    }
}
//deck is the stack that have cards
class Stack{
    constructor(limit = 0) {
        this.top = null;
        this.length = 0;
        this.limit = limit;
    }

    isFull = () => this.length === this.limit;
  
    isEmpty = () => this.length === 0;
  
    peek = () => {
        console.log(`First card in deck: ${this.top.color} - ${this.top.number}`);
     
    }

    //fill the stack with the cards
    push = (color, number) => {
        if (this.isFull()) {
            console.log("Eww, the stack is full. Go away!");
        } else {
            const newNode = new Node(color, number, this.top);
            this.top = newNode;
            this.length++;
        }
    };
    
    //dirtibute 5 cards for each player
    pop = () => {
        if (this.isEmpty()) {
            console.log("What else do you wanna take from me? I have nothing left!");
          } else {
            const popped = this.top;
            this.top = popped.next;
            this.length--;
            console.log(`* ${popped.color} - ${popped.number}`);
          }
    };  
}


//getrandom function: get random color and number
const getrandom = (arr) => arr[parseInt(Math.random() * arr.length)];

//drawcard function: to draw 5 cards for each player
const drawcard = (cardgame) => {
    cards = 0;
    while (cards < 5) {
        cardgame.pop();
        cards++;
    }
}


const cardgame = new Stack(20)
const colors = ["red", "blue", "green", "yellow"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//fill the stack with 20 cards
let cards = 0;
while (cards < 20) { // or while (!cardgame.isFull())
    let color = getrandom(colors);
    let number = getrandom(numbers);
    cardgame.push(color, number);
    //show the list of all cards
    // cardgame.peek();
    cards++;
}
    
console.log(`Player 1 Cards:`);
drawcard(cardgame);
console.log("-------------------------------");
console.log(`Player 2 Cards:`);
drawcard(cardgame);
console.log("\n-------------------------------");
cardgame.peek();



