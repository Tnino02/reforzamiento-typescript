// Ejercicio 6: Desestructuración de Objetos

// Reutilizamos el objeto estudiante
const estudiante2 = {
  nombre: "Tania Niño",
  edad: 22,
  carrera: "Ingeniería de Sistemas",
  semestre: 7,
};

// Desestructuración del objeto
const { nombre, carrera } = estudiante2;

// Mostrar valores en consola
console.log(`Nombre del estudiante: ${nombre}`);
console.log(`Carrera: ${carrera}`);
