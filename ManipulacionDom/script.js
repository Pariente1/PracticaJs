const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result')


function btnOnClick () {
    const valor1 = parseInt(input1.value);
    const valor2 = parseInt(input2.value);
    const suma = valor1 + valor2;

    console.log(`la suma es: ` + suma);

    pResult.innerHTML = 'El resultado es: ' + suma;

   return;
}

function btnOnChange1 (){
    console.log('Escribiste algo en el recuadro 1')
}

function btnOnChange2 (){
    console.log('Escribiste algo en el recuadro 2')
}