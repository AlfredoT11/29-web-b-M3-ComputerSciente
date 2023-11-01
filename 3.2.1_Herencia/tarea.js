/*
Crear una clase llamada "Notificador" que envíe mensajes a las Personas (nombre, edad, profesión).

Crear una clase llamada "Mensaje" que tenga un método enviar() que imprima en pantalla un mensaje a enviar.

Crear al menos 3 clases hijas de "Mensaje" que sean diferentes medios de comunicación (email, mensaje de texto, sms, WA, etc.) 
y que sobreescriban el método enviar para mandar mensajes.
*/

class Mensaje{
    constructor(){
        
    }

    enviar(mensaje){
        console.log(`Enviando mensaje normal...`);
        console.log(mensaje);
        console.log('Mensaje enviado con éxito');
    }
}

class Email extends Mensaje{
    constructor(){
        super();
    }

    enviar(mensaje){
        console.log(`Enviando un correo electrónico...`);
        console.log(mensaje);
        console.log('Mensaje enviado con éxito');
    }
}

class SMS extends Mensaje{
    constructor(){
        super();
    }

    enviar(mensaje){
        console.log(`Enviando un SMS...`);
        console.log(mensaje);
        console.log('Mensaje enviado con éxito');
    }
}

class WhatsApp extends Mensaje{
    constructor(){
        super();
    }

    enviar(mensaje){
        console.log(`Enviando un mensaje por WhatsApp...`);
        console.log(mensaje);
        console.log('Mensaje enviado con éxito');
    }
}

class PersonaMensaje{
    constructor(nombre, edad, profesion){
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }
}

class Notificador{
    constructor(){

    }

    enviarMensaje(persona, mensaje, textoMensaje){
        console.log(`Datos de la persona: ${persona.nombre}, ${persona.edad}, ${persona.profesion}`);
        mensaje.enviar(textoMensaje);
    }
}

console.log('Tarea');

const notificador1 = new Notificador();

const personaMensaje1 = new PersonaMensaje('Tona', 24, 'Analista de sistemas');

const correoElectronico1 = new Email();
const sms1 = new SMS();
const wa1 = new WhatsApp();

notificador1.enviarMensaje(personaMensaje1, correoElectronico1, 'Dale de comer al perro');
notificador1.enviarMensaje(personaMensaje1, sms1, 'Dale de comer al perro');
notificador1.enviarMensaje(personaMensaje1, wa1, 'Dale de comer al perro');

