const miArreglo = [2, 4, 6, 8, 10, 'doce', true, [4, 6], {}, () => {console.log('Hola')}];
console.log(miArreglo);
miArreglo.push(12); //Agrega un elemento al final del arreglo.
console.log(miArreglo);
miArreglo.pop(); //Elimina el elemento final del arreglo.
console.log(miArreglo);

console.log(`El primer elemento es: ${miArreglo[0]}`);
console.log(`El tamaño del arreglo es: ${miArreglo.length}`);

function mensajeA(){
    mensajeB();
    console.log('Mensaje A');
}

function mensajeB(){
    mensajeC();
    console.log('Mensaje B');
}

function mensajeC(){
    console.log('Mensaje C');
}

mensajeA();

class Pila{

    constructor(){
        this.datos = [];
    }

    //Método push
    agregar(valor){
        this.datos.push(valor);
    }

    //Método pop
    eliminar(){
        if(this.datos.length == 0){
            return null;
        }
        return this.datos.pop();
    }

    //Método peek
    mostrarTope(){
        if(this.datos.length == 0){
            return null;
        }
        return this.datos[this.datos.length - 1];
    }

}

const pila1 = new Pila();

pila1.agregar(5);
pila1.agregar(4);
pila1.agregar(3);

console.log(pila1.datos);

console.log(pila1.mostrarTope());

pila1.eliminar();
console.log(pila1.mostrarTope());
pila1.eliminar();
console.log(pila1.mostrarTope());
pila1.eliminar();
console.log(pila1.mostrarTope());
