
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

    constructor(nombre, edad, genero, nacionalidad){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
        this.nacionalidad = nacionalidad;
        this.horasSuenio = 0;
        this.mejorAmigo = null;
    }

    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
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
