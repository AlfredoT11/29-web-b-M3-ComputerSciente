/*
Crear una clase llamada  Contacto con los siguientes datos
Nombre 
Apellidos
Telefono


Después crear una clase que sea ListaContactos la cual tendrá dos métodos
Agregar un contacto
Buscar un contacto por nombre
*/

//let segundoNombre <- camelCase
//function miFuncion(){} <- camelCase
//class ListaContactos{} <- PascalCase


class Contacto{
    constructor(nombre, apellidos, telefono){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.telefono = telefono;
    }
}

class ListaContactos{

    constructor(){
        this.lista = [];
    }

    agregarContacto(nombre, apellidos, telefono){
        /* Esta es una alternativa para agregar un contacto
            La otra alternativa sería enviar directamente un objeto de tipo
            contacto y hacer el push.
        */
        const contacto = new Contacto(nombre, apellidos, telefono);
        this.lista.push(contacto);
    }

    buscarContactoPorNombre(nombre){
        for(let i = 0; i < this.lista.length; i++){
            if(this.lista[i].nombre == nombre){
                return this.lista[i];
            }
        }
        return null;
    }

}

const listaContactos1 = new ListaContactos();

listaContactos1.agregarContacto('Tonatiuh', 'Díaz', 55555555);
listaContactos1.agregarContacto('Malinali', 'Becerril', 44444444);
listaContactos1.agregarContacto('Nelson', 'Carrasco', 33333333);

console.log('Lista de contactos');
console.log(listaContactos1.lista);

console.log(`Buscando a Tonatiuh: `);
console.log(listaContactos1.buscarContactoPorNombre('Tonatiuh'))
console.log(`Buscando a Alberto: ${listaContactos1.buscarContactoPorNombre('Alberto')} `);

