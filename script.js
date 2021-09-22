console.log("Hello wrold");
console.group("Cuadrados");  

//codigo del cuadrado
//const ladoCuadrado = 5;
//function ladosDelCuadrado(lado) {
  //  return lado; 

 
//console.log("los lados del cuadrado miden: "+ lado +"cm");

function PerimetroCuadrado(lado) {
    return lado*4;

}
//console.log("el perimetro del cuadrado es: "+ PerimetroCuadrado  +"cm");

function AreaCuadrado(lado) {
    return lado * lado;
}
//console.log("el Area del cuadrado es: "+ AreaCuadrado  +"cm");

console.groupEnd();

console.group("Triangulos");  
    function PerimetroTriangulo(lado) {
    return lado*3;
}
    console.groupEnd();



//interaccion con javaScript
function calcularPerimetrocuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro ="el perimetro es "+ PerimetroCuadrado(value);
    alert(perimetro);

}


//interaccion con javaScript, triangulo



function calcularPerimetroTriangulo() {
    const input = document.getElementById("InputTriangulo");
    const value = input.value
    const perimetroTriangulo = "el perimetro del trisangulo es: " + PerimetroTriangulo(value);
    alert(perimetroTriangulo);
}