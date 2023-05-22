/* Tienes un array de números, tu reto es retornar los números de ese array multiplicados por dos.

Para solucionarlo vas a encontrar una función llamada multiplyElements que recibe un parámetro de entrada:

array: Un array de números
Dentro del cuerpo de la función multiplyElements debes escribir tu solución.

Ejemplo 1:

Input: [2, 4, 5, 6, 8]
Output: [4, 8, 10, 12, 16]

Ejemplo 2:

Input: [1, 1, -2, -3]
Output: [1, 1, -4, -6] */

function multiplyElements(array){
    let newArray: []; // declaramos un nuevo array vacio.
    for (let i=0; i < array.length; i++){
        newArray.push(array[i]*2);
    }
    return newArray;
}
console.log(multiplyElements([2, 4, 5, 6, 8])); // [4, 8, 10, 12, 16]
console.log(multiplyElements([1, 1, -2, -3])); // [2, 2, -4, -6]