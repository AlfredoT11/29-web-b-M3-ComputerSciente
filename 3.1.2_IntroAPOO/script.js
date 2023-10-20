
/*
Persona
    Características
        -Nombre
        -Edad
        -Género
        -Nacionalidad
        -Horas de sueño
        -Mejor amigo
    Acciones
        -Saludar
        -Dormir
        -Platicar
*/

class Persona{

    #edad;
    #mejorAmigo;

    constructor(nombre, edad, genero, nacionalidad){
        this.nombre = nombre;
        this.#edad = edad;
        this.genero = genero;
        this.nacionalidad = nacionalidad;
        this.horasSuenio = 0;
        this.#mejorAmigo = null;
    }

    getEdad(){
        return this.#edad;
    }

    setEdad(edad){
        if(edad < 0){
            this.#edad = 0;
        }else{
            this.#edad = edad;
        }
    }

    getMejorAmigo(){
        return this.#mejorAmigo;
    }

    setMejorAmigo(mejorAmigo){
        this.#mejorAmigo = mejorAmigo;
    }

    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.#edad} años`);
    }

    dormir(horasDormidas){
        console.log(`Ayer dormí ${this.horasSuenio} horas y hoy dormí ${horasDormidas} horas`);
        this.horasSuenio = horasDormidas;
    }

    platicar(interlocutor){
        console.log(`Estoy platicando con ${interlocutor.nombre}`);
        interlocutor.saludar();
    }

}

const personaA = new Persona('Tona', 24, 'Masculino', 'Mexicana');

personaA.saludar();
console.log(personaA.horasSuenio);
personaA.dormir(8);
console.log(personaA.horasSuenio);

const personaB = new Persona('Juan', 23, 'Masculino', 'Colombiana');

personaA.platicar(personaB);

console.log(`La edad de ${personaA.nombre} es ${personaA.getEdad()}`);
personaA.setEdad(25);
console.log(`La edad de ${personaA.nombre} es ${personaA.getEdad()}`);

personaA.setMejorAmigo(personaB);

console.log(`El mejor amigo de ${personaA.nombre} es ${personaA.getMejorAmigo().nombre}`);


//Ejercicio:
/*
Crear una clase llamada  Contacto con los siguientes datos*
Nombre 
Apellidos
Telefono


Después crear una clase que sea ListaContactos la cual tendrá dos métodos
Agregar un contacto
Buscar un contacto por nombre
*/

