/* Generar metodos para obtener el indice de un array (get) y para poner elemntos en un array (push) */

// const array = ["Diego", "Karen", "Oscar"];

class MyArray {
    constructor() {
      this.length = 0;
      this.data = {};
    }
    //metodo para obtener el valor del indice
    get(index) {
      return this.data[index];
    }

    //Metodo para agregar un elemento al inicio de un array
/*     addStart(item){ 
      this.length ++;
      let x = 2;
      for (let i = 1; i <= this.length - 1; i ++) { 
        this.data[this.length - i] = this.data[this.length - x];
        x++;
      } 
      this.data[0] = item;  
      return this.length;
    } */

    //Metodo DE AGREGAR indice al inicio
    addStart(){ 
      this.length ++;
      let x = 2;
      for (let i = 1; i <= this.length - 1; i ++) { 
        this.data[this.length - i] = this.data[this.length - x];
        if(x > this.length-1){
          this.data[0]= undefined;
        }else {
          x++;
        }
      }
    }
    //Metodo para agregar valores al inicio de un array
    addManyItems(item){
        if (this.data[0]  == null){
          this.data[0] = item; 
        }else { 
          this.addStart();
          this.data[0] = item; 
        }
      return this.data;
    }

    //Metodo para poner un valor a mi array 
    push(item) {
      this.data[this.length] = item;
      this.length++;
      return this.data;
    }  

    //Metodo para agregar un valor en cualquier indice del array, mientras que sus valores se desplazan al siguiente index
    pushE(index, item) {
      this.length ++;
      let x = 2;
      for (let i = 1; i <= this.length - index; i ++) { 
        this.data[this.length - i] = this.data[this.length - x];
        x++;
      } 
      this.data[index] = item; 
      return this.data;
    }  
    
    //Metodo para eliminar cualquier indice y desplazar el siguiente indice con su valor al valor eliminado
    shiftItem(index){
      const item = this.data[index];
      for (let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
      }
      delete this.data[this.length - 1];
      this.length --;
      return  item;
      }
    

    //Metodo para eliminar el ultimo valor de mi array
    pop(){
      const lastItem = this.data[this.length -1];
      delete this.data[this.length -1];
      this.length--;
      return lastItem;
    }
    //Metodo para eleiminar cualquier valor de un array
        /* delete(index){
          const item = this.data[index];
          this.shiftItem(index);
          return item;
          
        } */

}
  
  const myArray = new MyArray(
    
  );

myArray.push("Steban");
myArray.push("Tereza");
myArray.push("Ana");
myArray.push("Claudia");
myArray.push("Camila");
/* myArray.push("Juan"); */


   
  