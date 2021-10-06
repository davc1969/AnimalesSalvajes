import Animal from "./animal.js";

class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    };

    Chillar() {
        this.playSound();
    }
};

class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    };

    Rugir() {
        this.playSound();
    }
};

class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    };

    Aullar() {
        this.playSound();
    }
};

class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    };

    Grunir() {
        this.playSound();
    }
};

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    };

    Sisear() {
        this.playSound();
    }
};

export { Aguila, Leon, Lobo, Oso, Serpiente };