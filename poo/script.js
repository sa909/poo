class Mascota {
    constructor(nombre, especie, color) {
        this.nombre = nombre;
        this.tipo = especie;
        this.color = color;
    }

    
    presentarse() {
        return "Hola, soy " + this.nombre + ", un " + this.tipo + " de color " + this.color + ".";
    }
}


const martin = new Mascota("Martin", "zorro", "rojo");


document.getElementById("titulo").innerText = martin.nombre;
document.getElementById("descripcion").innerText = martin.presentarse();
