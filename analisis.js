//Helpers - Utils
function esPar(numero){
    return (numero%2===0);
}

function calcularMediaAritmética (lista){
    // let sumaLista = 0;
    // for (let i =0;i<lista.length;i++){
    //     sumaLista = sumaLista+ lista[i];
    // }

    const sumaLista = lista.reduce(
        function (valorAculumado = 0,nuevoElemento){
            return valorAculumado + nuevoElemento;
        }
    )
    const promedioLista1 = sumaLista /lista.length;
    return promedioLista1;
}

//Calculadora de medianas
function medianaSalarios(lista){
    const mitad = parseInt(lista.length /2);
    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad-1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmética([
            personaMitad1, personaMitad2
        ]);
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

//Mediana General

const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salaryA,salaryB){
        return salaryA - salaryB;
    }
);

const medianaGeneralCol =medianaSalarios(salariosColSorted);

//Mediana del top 10%
// const arrayEjemplo =[0,1,2,3,4,5,6,7,8,9,10]
// const EJEMPLO = arrayEjemplo.splice(5,2);
// EJEMPLO -> [5, 6]


const spliceStart = (salariosColSorted.length*0.9);
const spliceCount = salariosColSorted.length - spliceStart;


const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col =medianaSalarios(salariosColTop10);


console.log(
    medianaGeneralCol,
    medianaTop10Col,
);