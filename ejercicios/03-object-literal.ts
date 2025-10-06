// Ejercicio 3: Literales de Objetos

// Definición del objeto estudiante
const estudiante = {
  nombre: "Tania Niño",
  edad: 22,
  carrera: "Ingeniería de Sistemas",
  semestre: 7,
  descripcion(): string {
    return `Soy ${this.nombre}, tengo ${this.edad} años y estudio ${this.carrera} en el semestre ${this.semestre}.`;
  },
};

// Mostrar descripción en consola
console.log(estudiante.descripcion());
