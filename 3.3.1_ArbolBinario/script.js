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
}