const prompt = require('prompt-sync')({ sigint: true });
// needtoeditit
class TreeNode{
    constructor(name) {
        this.name = name;
        this.children = []; //max children 2
    }

  addChild = (node, lname) => {
    // if (this.children.length < 2) {
    //   this.children.push(node);
    //   console.log(`${node.name} child of ${this.name}`);
    // } else console.log("Child is an orphan.");
    if (this.children.length < 2) {
      this.children.push(node);
      return `added a child to ${lname}`;
    }
    else
      return 'child is an orphan';
  };
  
  getchildwithname = (name) => {
    for (let child of this.children) {
      if (child.name === name) {
        return child;
      }
    }
    return null;
  }

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
    // let child = new TreeNode(userinput);
 
    let current = root;
    let Fullnamearr = userinput.split(' ').reverse();
    let fname = Fullnamearr.pop();
    let lname = Fullnamearr.shift();

    if (current.name === lname) {
      if (Fullnamearr.length>0) {
        for (let name of Fullnamearr) {
          let child = current.getchildwithname(name);
          if (child) {
            current = child;
          }
          else {
            console.log("Parent not exist");
          }
        }
      } 
        let newNode = new TreeNode(fname);
        console.log(current.addChild(newNode, lname));
      
    } else {
      console.log("person not belong to family");
    }
  }
  console.log("------------------------------------");
}
root.traverse();

