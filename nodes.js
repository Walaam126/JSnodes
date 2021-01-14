const prompt = require('prompt-sync')({ sigint: true });

class Node {
    constructor(age,highlight,next = null) {
        this.age = age;
        this.highlight = highlight;
        this.next = next;
    }
}
  
class LinkedList {
    constructor(age,highlight) {
        this.head = new Node(age,highlight);
    }
    
    addfirst = (age, highlight) => {
        const newNode = new Node(age, highlight, this.head);
        this.head = newNode;
    };

    traverse = () => {
        let current = this.head;
        while (current) {
            console.log(`age: ${current.age}, highlight: ${current.highlight}`)
            current = current.next;
        }
    };

    addage = (age) =>{  
        let current = this.head;
        while (current.age < age) {
            let currage = current.age + 1;
            if (current.next && current.next.age === currage) {
                current = current.next;
            }
            //if new age not greater than current by one year, check for missing nodes
            else {
                let highlight = prompt(`What is the highlight for age ${currage} `);
                let newNode = new Node(currage, highlight, current.next);
                current.next = newNode;
                current = newNode;
            }
        }
    };
        
}



const yearslist = new LinkedList(7,"I turned seven");
yearslist.addfirst(3,"I started walking");
yearslist.addfirst(1, "I was born");
yearslist.traverse();

const age = prompt("How old are you?");
yearslist.addage(age);
yearslist.traverse();







