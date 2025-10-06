// Ejercicio 4: Arreglos

// Crear un arreglo de calificaciones
const calificaciones: number[] = [4.0, 3.5, 4.5, 5.0, 3.8];

// Calcular promedio usando un bucle for
let suma = 0;
for (let i = 0; i < calificaciones.length; i++) {
  suma += calificaciones[i];
}

const promedio = suma / calificaciones.length;
console.log(`Calificaciones: ${calificaciones}`);
console.log(`Promedio del grupo: ${promedio.toFixed(2)}`);
