export default class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        this._nombre      = nombre;
        this._edad        = edad;
        this._img         = img;
        this._comentarios = comentarios;
        this._sonido      = sonido;
    }

    //GETTERS de los atributos
    get Nombre ()      { return this._nombre     };

    get Edad ()        { return this._edad       };

    get Img ()         { return this._img        };

    get Comentarios () { return this._comentarios};

    get Sonido ()      { return this._sonido     }

    //SETTERS de los atributos
    set Nombre (nuevoNombre)           { this._nombre = nuevoNombre };

    set Edad (nuevaEdad)               { this._edad = nuevaEdad };

    set Img (nuevaImg)                 { this._img = nuevaImg };

    set Comentarios (nuevoComentarios) { this._comentarios = nuevoComentarios };

    set Sonido (nuevoSonido)           { this._sonido = nuevoSonido };

    playSound() {
        const player = document.getElementById("player")
        player.setAttribute("src", `/assets/sounds/${this._sonido}`)
        player.load()
        player.play()
    }
}