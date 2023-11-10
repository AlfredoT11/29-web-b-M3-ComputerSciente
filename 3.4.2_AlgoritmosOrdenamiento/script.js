function a(n) {
    console.log('Función A' + n);
    if (n < 10) {
        a(n + 1);
    }
}

console.log('Mensaje');
a(0);

//inicio y final son índices (posiciones) del arreglo.
function busquedaBinaria(numero, arreglo, inicio, final) {

    if (inicio > final) {
        return -1;
    }

    const posicionMitad = Math.floor((inicio + final) / 2);

    /*if (inicio === final && arreglo[posicionMitad] !== numero) {
      return -1;
    }*/

    if (arreglo[posicionMitad] === numero) {
        return posicionMitad;
    } else if (numero > arreglo[posicionMitad]) {
        //Me muevo a la derecha
        return busquedaBinaria(numero, arreglo, posicionMitad + 1, final);
    } else {
        //Me muevo a la izquierda
        return busquedaBinaria(numero, arreglo, inicio, posicionMitad - 1);
    }
}

function busqueaLineal(numero, arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === numero) {
            return i;
        }
    }
    return -1;
}

function generarAleatorios(n, numeroMaximo) {
    const arreglo = [];
    for (let i = 0; i < n; i++) {
        arreglo.push(Math.round(Math.random() * numeroMaximo));
    }
    return arreglo;
}

function ordenamientoBurbuja(arreglo) {

    let huboComparacion = false;

    do {
        huboComparacion = false;
        for (let i = 0; i < arreglo.length - 1; i++) {
            if (arreglo[i] > arreglo[i + 1]) {
                let auxiliar = arreglo[i];
                arreglo[i] = arreglo[i + 1];
                arreglo[i + 1] = auxiliar;
                huboComparacion = true;
            }
        }
    } while (huboComparacion);

    return arreglo;

}

//const arreglo = [1, 4, 6, 9, 10, 21, 42];

const arregloDesordenado = generarAleatorios(100000, 100);
//console.log(arregloDesordenado);

const arreglo = ordenamientoBurbuja(arregloDesordenado);
//console.log(arreglo);

//console.log(arregloDesordenado);
//const arreglo = arregloDesordenado.sort((a, b) => { return a - b });
//const arreglo = arregloDesordenado.sort();
//console.log(arregloDesordenado);

let numero = 50;


console.log('Búsqueda lineal');

console.time('Tiempo de búsqueda lineal');
if (busqueaLineal(numero, arreglo) !== -1) {
    console.log(`El valor ${numero} SÍ existe`);
} else {
    console.log(`El valor ${numero} NO existe`);
}
console.timeEnd('Tiempo de búsqueda lineal');

console.log('Búsqueda binaria');
console.time('Tiempo de búsqueda binaria');
if (busquedaBinaria(numero, arreglo, 0, arreglo.length - 1) !== -1) {
    console.log(`El valor ${numero} SÍ existe`);
} else {
    console.log(`El valor ${numero} NO existe`);
}
console.timeEnd('Tiempo de búsqueda binaria');
