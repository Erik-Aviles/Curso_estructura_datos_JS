const h2 = document.querySelector('h2');
h2.textContent = 'Graphs (Grafos)';

class Graphs {
    constructor(){
        this.node = 0;
        this.adjecenList= {};
    }

    addVertix(node){
        this.adjecenList[node]= [];
        this.node++;
    }

    addEdge(node1, node2){
        this.adjecenList[node1].push([node2]);
        this.adjecenList[node2].push([node1]);
    }
}

const graphs = new Graphs();

graphs.addVertix("1");
graphs.addVertix("3");
graphs.addVertix("4");
graphs.addVertix("5");
graphs.addVertix("6");
graphs.addVertix("8");


graphs.addEdge("3","5");
graphs.addEdge("6","3");
graphs.addEdge("1","6");
graphs.addEdge("1","3");
graphs.addEdge("1","4");
graphs.addEdge("4","5");
graphs.addEdge("8","4");
