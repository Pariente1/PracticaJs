## Respuestas al Test de JavaScript

Recuerda que estas respuestas (o al  menos la mayoría) NO SON ABSOLUTAS. Es completamente válido (en la mayoría de casos) si tienes otras respuestas. Recuerda que podemos discutirlo en la sección de comentarios del curso. :D


## Variables y operaciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una variable y para qué sirve?

Cajtas (espacios en memoria) donde podemos guardar información (dependiendo de los tipos y estructuras de datos que soporte nuestro lenguaje).

- ¿Cuál es la diferencia entre declarar e inicializar una variable?

Declarar es cuando le decimos a JavaScript que vamos a crear una variable con el nombre tal. Mientras que inicializar (o reinicializar) es asignarle un valor a esa variable.

- ¿Cuál es la diferencia entre sumar números y concatenar strings?

Una diferencia clave es que los números se suman de manera aritmética, mientras que los strings se concatenan. Cuando sumamos números, el resultado es la suma de los valores numéricos. En cambio, cuando concatenamos strings, el resultado es una cadena que une ambos strings.


- ¿Cuál operador me permite sumar o concatenar?

EL operador que nos permite sumar o concatenar es +. Este operador nos permite sumar números cuando lo usamos con números. Pero cuando los strings, lo que hace es unir (concatenar, así se dice) ambos strings.

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre: string
- Apellido: string
- Nombre de usuario en Platzi: string (@fulanito)
- Edad: number
- Correo electrónico: string (lala@gmail.com)
- Mayor de edad: boolean
- Dinero ahorrado: number
- Deudas: number

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

```
let nombre = 'Juan David';
let apellido = 'Catro Gallego';
let username = 'juandc';
let edad = 19;
let mail = 'juanito@alcachofa.xyz';
let esMayorDeEdad = true;
let dineroAhorrado = 1000;
let deudas = 100;
```

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)

```
let nombreCompleto = nombre + ' ' + apellido;
let dineroReal = dineroAhorrado - deudas;
```



## Funciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?

    Son la forma en la que encapsulamos bloques de codigo para que sean ejecutables en el futuro.

- ¿Cuándo me sirve usar una función en mi código?

    Cuando tenemos codigo repetido y en lugar de tener muchos de un mismo tipo. Tienes uno para reutilizarlo una y otra vez, asi solo cambias algunos parametros.

    Tambien nos sirve para ordenar y mejorar la legibilidad de nuestro codigo.

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?

    Las funciones reciben parametros cuando la estamos creando y les enviamos argumentos cuando las ejecutamos.


### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```

```js
    function Saludo(name, lastName, username) {
        const completeName = nombreCompleto(name, lastName);
        
        console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + username + ".");
    }
```


## Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional?

    Son la forma en la que ejecutamos un bloque de código u otro dependiendo de alguna condición o validación

- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

    If (else y else if), switch

    La declaración **if** se utiliza cuando se necesita evaluar una condición y ejecutar un bloque de código si la condición es verdadera.

    Por otro lado, la declaración **switch** se utiliza cuando se necesita evaluar una expresión y realizar diferentes acciones basadas en diferentes casos posibles. 

- ¿Puedo combinar funciones y condicionales?

    Sí, Las funciones pueden encapsular cualquier bloque de código, incluyendo condicionales.

### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```

``` js
if (tipoDeSuscripcion == "Free") {
    console.log ("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == "Basic") {
    console.log ("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == "Expert") {
    console.log ("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion == "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
```

### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

> 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏


## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?

    Es la forma de ejecutar un mismo bloque de código hasta que se cumpla una condición.

- ¿Qué tipos de ciclos existen en JavaScript?

    while, for y do while.

    El **while** y el **do while** son casi iguales. La diferencia es que el while hace la validación al inicio. Mientras que el do while primero ejecuta el código y luego hace la validación. 

    Mientras que el **for** nos obliga a definir que pasa al inicio y al final de cada ejecución.


    > Para ejecutar un while necesitas declarar previamente la variable
    ```javascript 
    let i=0;
    while (i<5){
        console.log("El valor de i es: " + i);
        i++;
    }
    ```

- ¿Qué es un ciclo infinito y por qué es un problema?

    Es cuando la validación de nuestros condicionales nunca se cumple y termina dañando la aplicación ya que sigue ejecutando infinitamente.

- ¿Puedo mezclar ciclos y condicionales?

    Sí. aunque los ciclos son una especie de condicionales, nada nos impide agregar más condicionales dentro del ciclo.

### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```

### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

> 💡 Pista: puedes usar la función prompt de JavaScript.
```js
let respuesta;
while(respuesta == '4') {
    let pregunta = prompt("cuanto es 2 + 2?")
    respuesta = pregunta;
}

```

## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?

    Es una lista de elementos.

    ```js
    const array = [1, "jajaj", true, false];
    ```

- ¿Qué es un objeto?

    Es una lista de elementos PEROOO cada elemento tiene un nombre clave.

```js
    const obj = {
        nombre: name,
        apellido: lastName,
        edad: age
        estilos: [abierto, cerrado, mixto]
    };
```

- ¿Cuándo es mejor usar objetos o arrays?

    Los objetos son adecuados cuando necesitas almacenar y acceder a información mediante claves descriptivas, mientras que los arrays son apropiados cuando necesitas almacenar y acceder a una colección ordenada de elementos mediante índices numéricos.

- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

    Si. Los arrays pueden guardar objetos y los arrays pueden guardar objetos entre sus propiedades.

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

```js
    function imprimirPrimerElementoArray(arr){
        console.log(arr[0])
    }

    imprimirPrimerElementoArray(['carlos', 'pepe', 'leo'])

    //Return 'carlos'.

```



### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

```js
    function imprimirElementoPorElemento(arr){
        for (let i = 0 ; i < arr.length ; i++){
            console.log(arr[i])
        }
    }

    imprimirElementoPorElemento(['pepe','carlos','pipo'])

    //Return pepe carlos pipo
```

### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

```js

//Crea un objeto con pares clave-valor.
const persona = {
    nombre: 'a',
    apellido: 'A',
    edad: 3,
};

//Crea un array vacío donde se almacenarán los valores del objeto convertidos en elementos del array.
const arrayPersona = [];

//Recorre el objeto utilizando un bucle for...in. Este bucle recorre todas las propiedades del objeto. Para cada propiedad, accede al valor correspondiente y agrégalo al array utilizando el método push().

for (let propiedad in persona){
    arrayPersona.push(persona[propiedad]);
};

//Ahora, el objeto se ha convertido en un array, donde cada elemento del array corresponde a un valor del objeto. Puedes verificarlo mostrando el contenido del array utilizando console.log().

console.log(arrayPersona);

// Return ['a', 'A', 3]
```