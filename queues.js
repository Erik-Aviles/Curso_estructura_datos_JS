const h2 = document.querySelector("h2");
h2.textContent = "Queues (Cola)";
const p = document.createElement('p');
p.innerText= "Patron: primero en entrar, primero en salir (FIFO)."
const body = document.querySelector('body');
body.append(p);

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queues{
    constructor(values){
        this.firt = null;
        this.last = null; 
        this.length = 0;
    }
    peek(){
       if (this.firt === null) {
        console.log("Aun no existe elementos")
       } else {
      return this.firt;
       }
       return this;
    }

    //Insertar elemento al final
    enQueues(value){
        const node = new Node(value);
        if (this.length === 0) {
            this.firt = node;
            this.last = node;
        } else {
            this.last.next = node;
            console.log(this.last.next)
            this.last = node;
            console.log(this.last)
        }
        this.length++;
        return this;
    }

    //Remover al primer elemento de la línea
    dequeues(){
        if (this.length === 0) {
            console.log("No hay elementos que borrar");
        } else if (this.length === 1) {
            this.firt = null;
            this.last = null;        
            this.length--;
        } else {
            this.firt = this.firt.next;
            this.length--;
        }
        return this;
    }

    

}

const myQueues = new Queues();