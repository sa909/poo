
class Mascota {
    constructor(nombre, tipo, color) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.color = color;
    }


    saludar() {
        return "Hola, soy " + this.nombre + ", un " + this.tipo + " de color " + this.color + ".";
    }
}


const martin = new Mascota("Martin", "zorro", "rojo");
const pepe = new Mascota("pepe", "alien", "azul")

document.getElementById("titulo").innerText = martin.nombre;
document.getElementById("descripcion").innerText = martin.presentarse();
document.getElementById("titulo").innerText = pepe.nombre;
document.getElementById("descripcion").innerText = pepe.presentarse();