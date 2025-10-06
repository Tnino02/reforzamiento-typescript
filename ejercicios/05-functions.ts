// Ejercicio 5: Funciones

// Función que calcula el promedio de un arreglo numérico
function calcularPromedio(notas: number[]): number {
  let total = 0;
  for (const nota of notas) {
    total += nota;
  }
  return total / notas.length;
}

// Prueba de la función
const notasEstudiante = [4.2, 3.9, 4.8, 5.0];
const promedioNotas = calcularPromedio(notasEstudiante);

console.log(`Notas: ${notasEstudiante}`);
console.log(`Promedio calculado: ${promedioNotas.toFixed(2)}`);

