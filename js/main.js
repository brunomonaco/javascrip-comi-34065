//Declaracion de la variable contraseña
let ingreso =true
let palabraClave = "matematicas";
let tipeo=prompt("Ingrese la palabra clave");


function login() {
    while(ingreso){
        if (tipeo==palabraClave){
            alert("Puede empezar a operar");
            ingreso=false;
            break;
            
        }
            alert("Vuelva a intetarlo");
            tipeo=prompt("Ingrese la palabra clave");
        }
       
   
    return ingreso;
    }
    let logueo=login();
    console.log(logueo);



let opcion = prompt(
    "Elija que superficie quiere calcular  \n1- Círculo. \n2 - Rerctángulo. \n3 - Cuadrardo. \nPresioná X para finalizar.");

while (opcion != "X" && opcion != "x"){
switch(opcion){

    //Primer case
    case"1":
    // Declaro las variables
 let radio = parseInt(prompt("Ingrese el radio en cm"));
 let PI = 3.14;

//Compruebo que el radio se un número positivo
 let continuar = true;

while (continuar) {
  if (radio > 0) {
   
    continuar = false;
    break;
  }
  alert("Por favor ingrese un valor mayor que cero");
  radio = prompt("Ingrese el radio en cm");
}








//Declaro la función
function superficie(radio, PI){
    return PI*radio*radio/2;
}
//Ejecuto la funcion
let resultado = superficie(radio,PI);

//Muestro el resultado
alert("La superficie del circulo es "+ resultado+" cm2");
break;

//Termina el case1

case "2":
        // Declaro las variables
let lado1 = parseInt(prompt("Ingrese un lado en cm"));

//Compruebo que el valor sea mayor que cero
let continuar2 = true;

while (continuar2) {
  if (lado1 > 0) {
   
    continuar2 = false;
    break;
  }
  alert("Por favor ingrese un valor mayor que cero");
  lado1 = prompt("Ingrese el lado en cm");
}


let lado2 = parseInt(prompt("Ingrese el otro lado en cm"));
let continuar3 = true;
//Compruebo que el valor sea mayor que cero
while (continuar3) {
  if (lado2 > 0) {
   
    continuar3 = false;
    break;
  }
  alert("Por favor ingrese un valor mayor que cero");
  lado2 = prompt("Ingrese el otro lado en cm");
}

//Declaro la función

function superficieRec(lado1, lado2){
    return lado1*lado2;
}
let resultado2 = superficieRec(lado1,lado2);

alert("La superficie del rectángulo es "+ resultado2+" cm2");
break;
//Termina el case2


case "3":
        // Declaro las variables
let lado3 = parseInt(prompt("Ingrese el lado en cm"));
let continuar4 = true;
while (continuar4) {
    if (lado3 > 0) {
     
      continuar4 = false;
      break;
    }
    alert("Por favor ingrese un valor mayor que cero");
    lado3 = prompt("Ingrese el lado en cm");
  }
  




function superficieC(lado3){
    return lado3*lado3;
}
let resultado3 = superficieC(lado3);

alert("La superficie del cuadrado es "+ resultado3+" cm2");
break;


default:
    alert("Gracias por calcular con nosotros");
    break;

}
//Pregunta nuevamente
opcion = prompt("Elegí una opción: \n1- Círculo. \n2 - Rerctángulo. \n3 - Cuadrardo. \nPresioná X para finalizar.")


}

alert("Gracias por calcular con nosotros");







