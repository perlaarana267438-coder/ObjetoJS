
//Función invertir
function invertir(cadena) {
  return cadena.split('').reverse().join(''); //se convierte la cadena en array, lo invierte y lo une como txt
}

//Función pnumeroValido
function numeroValido(valor) {
  return typeof valor !== 'symbol' && !isNaN(valor) && !isNaN(parseFloat(valor)); //checa si no es simb/obj invalido, nan y que sea num
}

//Funcion operacion math
function operacion(valor1, valor2, tipoOperacion) {
  if (!numeroValido(valor1) || !numeroValido(valor2)) { //se valida q los parametros sean nums validos
    return "Numeros invalidos"; //por sin no son
  }

  //los valores se ponen Number para q las operaciones sean corrects
  const num1 = Number(valor1);
  const num2 = Number(valor2);

  //nombres a minusculas para evitar errores
  //OPERACIONES
  switch (String(tipoOperacion).toLowerCase()) {
    case 'suma':
      return num1 + num2;

    case 'resta':
      return num1 - num2;

    case 'multiplicacion':
      return num1 * num2;

    case 'division':
      return num2 !== 0 ? num1 / num2 : "No se puede dividir entre cero"; //validacion para el 0
    default:
    }
    return "Operación inválida, usa: 'suma'\n 'resta'\n 'multiplicacion'\n 'division'";
}

//Funcion esPar
function esPar(valor) {
  if (!numeroValido(valor)) { //validacion-siesnumerovalido
    return false;
  }
  return Number(valor) % 2 === 0; //si el residuo es 2 o 0 es par
}

//Funcion eaPrimo
function esPrimo(valor) {
  if (!numeroValido(valor)) { //Validacion
    return false;
  }
  const num = Math.floor(Number(valor)); //valor a entero

  if (num <= 1) return false; //num menores o = no son primos

  for (let i = 2; i <= Math.sqrt(num); i++) { //recorre hasta la raiz cuadrada para buscar divisores
    if (num % i === 0) return false; //si es divisible entre i no es primo
  }

  return true;
}

//Funcion getBinario
function getBinario(valor) {
  if (!numeroValido(valor)) {
    return "Numero invalido";
  }

  let numero = Math.abs(Math.floor(Number(valor))); //el valor a entero positivo

  if (numero === 0) return "0";

  let binario = ""; //residuos

  while (numero > 0) { //divisiones entre dos mientras el num sea mayor a0
    let residuo = numero % 2; 
    binario = residuo + binario; //residuo a la cadena
    numero = Math.floor(numero / 2); //num a cociente entero para la sig iteracio
  }
  return binario; 
}


//== ===
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);
console.log('5' == 5);
console.log('5' === 5);

/*
==:
  Si lo valores comparados son de distinto tipo (número y texto, o booleano y número),
   JS intenta convertirlos a un tipo común antes de evaluar. 
   '5' == 5 y 0 == false devuelven true

===:
   Compara tanto el valor como el tipo de dato de manera directa, sin realizar
   conversiones automáticas. Si los tipos de datos no son exactamente iguales, la comparación 
   retorna false inmediatamente. Por eso '5'(string) === 5(number) devuelve false
*/

//ejecucion
console.log("Invertir:", invertir("hola"));
console.log("Num valido:", numeroValido(123));
console.log("Operacion:", operacion(5, 3, "suma"));
console.log("Par:", esPar(8));
console.log("Primo:", esPrimo(7));
console.log("Get Binario:", getBinario(13));