//Código del cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: "+ ladoCuadrado + "cm");
// Crear prímetro

function perimetroCuadrado(lado) {
    return lado*4;
}
//console.log("El perímetro del cuadrado es: " + perimetroCuadrado +"cm");
//Crear área
function areaCuadrado(lado){
 return lado*lado;
} 
//console.log("El área del cuadrado es: " + areaCuadrado + "cm'2");
console.groupEnd();

console.group("Triángulo");
//Código del triángulo
const ladoTriangulo1= 6;
const ladoTriangulo2= 6;
const baseTriangulo= 4;

console.log(
    "Los lados del triángulo miden: " 
    + ladoTriangulo1 
    + "cm, "
    + ladoTriangulo2 
    + " cm, " 
    + baseTriangulo 
    + "cm"
    );
    
// const alturaTriangulo= 5.5;
// console.log("La altura del triángulo es: "+ alturaTriangulo + " cm")

function perimetroTriangulo(lado1,lado2,base){
    if(lado1 === lado2 && lado1 != base){
        alert('isoceles')
        const altura = Math.sqrt(lado1**2 - base**2/ 4)
        console.log(altura)
    }
    else{
        alert('No es isosceles')
    }
    return (lado1 + lado2 + base);
}
//console.log("El perímetro del triángulo es: " + perimetroTriangulo + " cm");

function areaTriangulo(base,altura){
    return (base * altura) / 2;
} 
//console.log("El área del triángulo es: "+ areaTriaangulo + " cm'2")


console.groupEnd();


//Código del círculo
console.group("Circulo");
//Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

//Diámetro
function diametroCirculo (radio){
    return radio*2;
}
//console.log("El diámetro del círculo es: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
console.log("PI es: " + PI + "cm");

//Curcunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 
//console.log("El perimetro del círculo es: " + perimetroCirculo+ " cm");

//Area
function areaCirculo(radio){
    return (radio**2)*PI;
}  
//console.log("El area del círculo es: " + areaCirculo+ " cm'2");

console.groupEnd();

//Aqui interactuamos con HTML
function CalcularPerimetroCuadrado(){
    //Para obtener el valor que escribieron los usuarios en el input
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function CalcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}


function CalcularPerimetroTriangulo(){
    const lado1 = document.getElementById("InputLado1");
    const lado_1 = parseInt(lado1.value);
    const lado2 = document.getElementById("InputLado2");
    const lado_2 = parseInt(lado2.value);
    const ladoBase = document.getElementById("InputBase");
    const lado_Base = parseInt(ladoBase.value);

    const perimetro = perimetroTriangulo(lado_1,lado_2,lado_Base);
    alert(perimetro);
}

function CalcularAreaTriangulo(){
    const ladoAltura = document.getElementById("InputAltura");
    const lado_Altura = ladoAltura.value;
    const ladoBase = document.getElementById("InputBase");
    const lado_Base = ladoBase.value;

    const area = areaTriangulo(lado_Base,lado_Altura);
    alert(area);
}

function CalcularPerimetroCirculo(){
    const radio = document.getElementById("InputCirculo");
    const value = radio.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function CalcularAreaCirculo(){
    const radio = document.getElementById("InputCirculo");
    const value = radio.value;

    const area = areaCirculo(value);
    alert(area);
}