const h2 = document.querySelector('h2');
h2.textContent = 'Stacks (Pilas)';
const p = document.createElement('p');
p.innerText= "Patron: ultimo en entrar, primero en salir (LIFO)."
const body = document.querySelector('body');
body.append(p);

//clase Nodo
class Nodo {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

//Clase Stacks o pila
class Stack {
    constructor(){
        this.top = null;
        this.button = null;
        this.length = 0;
    }

    peek(){
        if (this.top === null ) {
            console.log('No existe ningun elemento');
        } else {
            return this.top; 
        }
        return this;
    }

    push(value){
        const nodo = new Nodo(value);
        if (this.length === 0) {
            this.top = nodo;
            this.button = nodo;
        } else{
            const pointer = this.top;
            this.top = nodo;
            this.top.next = pointer;

        }
        this.length ++;
        return this;
    }

    pop(){
        if (this.top === null ) {
            console.log('No existe ningun elemento');
        } else {
            const eliminar = this.top.next;
            this.top = eliminar;
            this.length--;
        }
        return this;
    }
}

const myStack = new Stack();



