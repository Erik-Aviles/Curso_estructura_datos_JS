
const h2 = document.querySelector('h2');
h2.textContent = 'Hash Table (Objeto:js)';

class HashTable{
    constructor(size){
    this.data = new Array(size);
    }

    hashMethod(key){
        let hash=0;
        for(let i=0;i<key.length;i++){
            hash=(hash+key.charCodeAt(i)*i)%this.data.length;
        }
        return hash;
    }
    set(key, value) {
        const address = this.hashMethod(key);
        if (!this.data[address]) {
        this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }

    get(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
        for (let i = 0; i < currentBucket.length; i++) {
            if (currentBucket[i][0] === key) {
            return currentBucket[i][1];
            }
        }
        }
        return undefined;
    }
    remplazaArray(key){
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    const deletedValue = this.data[address][i];
                    this.data[address].splice(i, 1, ["Juan", 2000]);
                    return deletedValue;
                }
            }
        }
        return undefined;
    }
    remove(key) {
        const address = this.hashMethod(key);
        /* debugger; */
        const currentBucket = this.data[address];
        /* debugger; */
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                /* debugger; */
                if (currentBucket[i][0] === key) {
                    const element = currentBucket[i][0];
                    /* debugger; */
                    delete currentBucket[i];
                    /* debugger; */
                    return console.log(`El Elemento [${element}] a sido eliminado` );
                }
            }
        }
        return undefined;
    }

    getAllKeys() {
        debugger;
        const keys = [];
        for (let i = 0; i < this.data.length; i++) {
            /* debugger; */
          if (this.data[i]) {
            /* debugger; */
            for (let j = 0; j < this.data[i].length; j++) {
                /* debugger; */
                keys.push(this.data[i][j][0]);
                /* debugger; */
            }
          }
        }
        return keys;
    }

}

const myHashTable = new HashTable(50);