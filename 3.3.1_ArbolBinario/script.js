class Nodo{
    constructor(valor){
        this.valor = valor;
        this.izquierdo = null;
        this.derecho = null;
    }
}

class ArbolBinario{
    constructor(){
        this.raiz = null;
    }

    insertar(valor){
        if(this.raiz == null){
            const nuevoNodo = new Nodo(valor);
            this.raiz = nuevoNodo;
        }else{
            // Valores menores a la izquierda.
            // Valores mayores o iguales a la derecha.

            let nodoActual = this.raiz;

            while(true){
                if(valor < nodoActual.valor){
                    //Movernos a la izquierda.
                    if(nodoActual.izquierdo == null){
                        let nuevoNodo = new Nodo(valor);
                        nodoActual.izquierdo = nuevoNodo;
                        return;
                    }else{
                        nodoActual = nodoActual.izquierdo;
                    }
                }else{
                    //Movernos a la derecha.
                    if(nodoActual.derecho == null){
                        let nuevoNodo = new Nodo(valor);
                        nodoActual.derecho = nuevoNodo;
                        return;
                    }else{
                        nodoActual = nodoActual.derecho;
                    }
                }
            }
        }
    }

    buscar(valor){
        let nodoActual = this.raiz;

        if(nodoActual == null){
            return false;
        }

        while(nodoActual != null){
            if(nodoActual.valor == valor){
                return true;
            }

            if(valor < nodoActual.valor){
                nodoActual = nodoActual.izquierdo;
            }else{
                nodoActual = nodoActual.derecho;
            }
        }
        return false;
    }

    inorden(){
        console.log('Inorden:');

        if(this.raiz == null){
            return;
        }

        let nodoActual = this.raiz;
        const pilaAuxiliar = [];

        while(nodoActual !== null || pilaAuxiliar.length > 0){
            while(nodoActual != null){
                pilaAuxiliar.push(nodoActual);
                nodoActual = nodoActual.izquierdo;
            }

            nodoActual = pilaAuxiliar.pop();
            console.log(`${nodoActual.valor}`);
            nodoActual = nodoActual.derecho;
        }

    }

    preorden(){
        console.log('Preorden:');

        if(this.raiz == null){
            return;
        }

        let nodoActual = this.raiz;
        const pilaAuxiliar = [];

        while(nodoActual !== null || pilaAuxiliar.length > 0){
            while(nodoActual != null){
                pilaAuxiliar.push(nodoActual);
                console.log(`${nodoActual.valor}`);
                nodoActual = nodoActual.izquierdo;
            }

            nodoActual = pilaAuxiliar.pop();
            nodoActual = nodoActual.derecho;
        }

    }

    postorden(){
        console.log('Postorden:');

        if(this.raiz == null){
            return;
        }

        let nodoActual = this.raiz;
        const pilaAuxiliar = [];

        while(nodoActual !== null || pilaAuxiliar.length > 0){
            while(nodoActual != null){
                pilaAuxiliar.push(nodoActual);
                nodoActual = nodoActual.izquierdo;
            }
            nodoActual = pilaAuxiliar.pop();
            nodoActual = nodoActual.derecho;
        }

    }

}


let arbolBinario = new ArbolBinario();

arbolBinario.insertar(5);
arbolBinario.insertar(2);
arbolBinario.insertar(9);
arbolBinario.insertar(4);
arbolBinario.insertar(3);

let valorABuscar = 4;
if(arbolBinario.buscar(valorABuscar)){
    console.log(`El valor ${valorABuscar} SÍ está en el árbol`);
}else{
    console.log(`El valor ${valorABuscar} NO está en el árbol`);
}

valorABuscar = 9;
if(arbolBinario.buscar(valorABuscar)){
    console.log(`El valor ${valorABuscar} SÍ está en el árbol`);
}else{
    console.log(`El valor ${valorABuscar} NO está en el árbol`);
}

valorABuscar = 11;
if(arbolBinario.buscar(valorABuscar)){
    console.log(`El valor ${valorABuscar} SÍ está en el árbol`);
}else{
    console.log(`El valor ${valorABuscar} NO está en el árbol`);
}

arbolBinario.inorden();
arbolBinario.preorden();
arbolBinario.postorden();
