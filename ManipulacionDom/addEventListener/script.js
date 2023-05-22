const h1 = document.querySelector('h1');
const form = document.querySelector('form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result')



/* btn.addEventListener('click', btnOnClick);  */
//Esto se traduce como 'Escucha cada vez que suceda cierto evento'. Necesita dos argumentos. El primero es el evento que quieres escuchar y el segundo es el codigo que se va a ejecutar con ese evento. 

//Después del addEventListener, no es necesario poner () al llamar a una función, ya que el mismo método pondrá parentesis al querer llamarlo. Entonces al poner function() probocaria que al llamar el metodo haría esto function()(). 

form.addEventListener('submit', sumarInputValues);

function sumarInputValues (event) {
    console.log({event});
    event.preventDefault;
    const sumaInputs = valor1.value + valor2.value;
    pResult.innerHTML = 'El resultado es: ' + sumaInputs;
    return;
}
