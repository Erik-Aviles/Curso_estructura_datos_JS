const h2 = document.querySelector('h2');
h2.textContent = "Trees (Arboles)";

class Nodo {
    constructor(value){
        this.left = null;
        this.rigth = null;
        this.value = value;
    }
}

class BinarySearchTrees{
    constructor(){
        this.root = null;
    }

/*        10
      4      20
    2  8  17  170   */

    insert(value){
        const newNode = new Nodo(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    if (!currentNode.rigth) {
                        currentNode.rigth = newNode;
                        return this;
                    }
                    currentNode = currentNode.rigth;
                    }
            }
        }
    } 
    search(value) {
        if (this.root === null) {
          console.error('El Tree no tiene nodos')
        } else {
          let currentNode = this.root;
          while(true) {
            if (value === currentNode.value) {
              console.log('Lo has encontrado');
              return currentNode;
            } else if (value < currentNode.value) {
              if(currentNode.left === null) {
                return console.error(`Este valor no se encuentra en el Tree`);
              } else {
                currentNode = currentNode.left;
              }
            } else {
              if(currentNode.right ===  null) {
                return console.error(`Este valor no se encuentra en el Tree`);
              } else {
                currentNode = currentNode.right;
              }
            }
          }
        }
      }
    

}


const myTrees = new BinarySearchTrees();

myTrees.insert(10)
myTrees.insert(4)
myTrees.insert(20)
myTrees.insert(2)
myTrees.insert(8)
myTrees.insert(17)
myTrees.insert(170)

