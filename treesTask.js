const prompt = require('prompt-sync')({ sigint: true });
class TreeNode{
    constructor(name) {
        this.name = name;
        this.children = []; //max children 2
    }

  addChild = (node) => {
    const Fullnamearr = node.name.split(' ');
    const parent = Fullnamearr[1];
//iterating through the tree
        let nodes = [this];
        while (nodes.length > 0) {
          let current = nodes.pop();
          console.log(current.children);
          if (current.name.includes(parent)) {
            if (current.children.length < 2) {
              current.children.push(node);
              return `added a child to ${current.name}`;
            }     
            else
              return "child is an orphan"; 
          }//end of first if
          else
            return "parent does not exist";   
    }//end of while
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
    console.log(root.addChild(child));
  }
  console.log("------------------------------------");
}

// const child1 = new TreeNode("Billy Hamza");
// const child1a = new TreeNode("bilder Billy Hamza");
// const child1b = new TreeNode("bbbbbbbbbb Billy Hamza");

// console.log(root.addChild(child1));
// console.log(child1.addChild(child1a));
// console.log(child1.addChild(child1b));
// root.traverse();


