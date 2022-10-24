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
/*
 while (radio<= 0) {
    alert("Por favor ingrese un valor válido");
    radio = parseInt(prompt("Ingrese el radio"));
  }
*/
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
let lado2 = parseInt(prompt("Ingrese el otro lado"));

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







