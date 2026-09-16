class Mascota {
    constructor(nombre, tipo, color) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.color = color;
    }

    
    presentarse() {
        return "Hola, soy " + this.nombre + ", un " + this.tipo + " de color " + this.color + ".";
    }
}


const martin = new Mascota("Martin", "zorro", "rojo");


document.getElementById("titulo").innerText = martin.nombre;
document.getElementById("descripcion").innerText = martin.presentarse();
