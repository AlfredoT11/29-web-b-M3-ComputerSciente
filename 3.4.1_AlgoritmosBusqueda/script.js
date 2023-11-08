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
    const posicionMitad = Math.floor((inicio + final) / 2);

    if (inicio === final && arreglo[posicionMitad] !== numero) {
        return -1;
    }

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

const arreglo = [1, 4, 6, 9, 10, 21, 42];
let numero = 1;

console.log('Búsqueda lineal');
if (busqueaLineal(numero, arreglo) !== -1) {
    console.log(`El valor ${numero} SÍ existe`);
} else {
    console.log(`El valor ${numero} NO existe`);
}

console.log('Búsqueda binaria');
if (busquedaBinaria(numero, arreglo, 0, arreglo.length - 1) !== -1) {
    console.log(`El valor ${numero} SÍ existe`);
} else {
    console.log(`El valor ${numero} NO existe`);
}
