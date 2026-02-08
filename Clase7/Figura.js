// Definición de la clase Rectángulo
class Rectangulo {
    // El constructor inicializa las propiedades de la clase
    constructor(ancho, altura) {
        this.ancho = ancho;
        this.altura = altura;
    }

    // Método para calcular el área
    calcularArea() {
        return this.ancho * this.altura;
    }

    // Método para calcular el perímetro
    calcularPerimetro() {
        return 2 * (this.ancho + this.altura);
    }
}

// 1. Crear una instancia (objeto) de la clase Rectángulo con ancho 10 y altura 5
const miRectangulo = new Rectangulo(10, 5);

// 2. Calcular y mostrar los resultados en la consola
console.log("Datos del Rectángulo:");
console.log(`Ancho: ${miRectangulo.ancho}`);
console.log(`Altura: ${miRectangulo.altura}`);
console.log("--------------------------");
console.log(`Área: ${miRectangulo.calcularArea()}`);
console.log(`Perímetro: ${miRectangulo.calcularPerimetro()}`);