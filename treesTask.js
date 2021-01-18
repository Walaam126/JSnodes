const prompt = require('prompt-sync')({ sigint: true });
class TreeNode{
    constructor(name) {
        this.name = name;
        this.children = []; //max children 2
    }

  addChild = (node, lname) => {
    if (this.children.length < 2) {
      this.children.push(node);
      return `added a child to ${lname}`;
    }
    else
      return 'child is an orphan';
  };
  
  getchildwithname = (name) => {
    return this.children.fill((child) => child.name === name);
  }
  myaddChild = (node) => {
    let current = this;
    const Fullnamearr = node.name.split(' ');
    let fname = Fullnamearr.shift();
    let lname = Fullnamearr.pop();
    //if person name have family name
    if (current.name === lname) {
      if (Fullnamearr.length > 0) {
        for (let name of Fullnamearr) {
          let child = current.getchildwithname(name);
          if (child) {
            current = child;
          }
          else {
            let newNode = new TreeNode(name);
            current.addChild(newNode, name);
            current = newNode;
          }
        }
      }
      else {
        let newNode = new TreeNode(fname);
        console.log(current.addChild(newNode,lname));
      }
    } else {
      console.log("person not belong to family");
    }
   
  };
    traverse = () => {
        let nodes = [this];
        while (nodes.length > 0) {
          let current = nodes.pop();
          console.log(current.name);
          nodes = [...nodes, ...current.children];
        }
      };
}

const root = new TreeNode("family");
let userinput = "";
while (userinput !=="done") {
  userinput = prompt("enter child full name (enter done if finished): ");
  if (userinput !== "done") {
    let child = new TreeNode(userinput);
    root.myaddChild(child);
  }
  console.log("------------------------------------");
}
root.traverse();

