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

function calcularMediana(lista1){
    const lista = lista1.sort(function(a, b) {
        return a - b;
      })
    const mitadLista = parseInt(lista.length/2);

    function esPar(numerito){
       if(numerito %2 === 0){
        return true;
        } else{
             return false;
        }
    }
    
    let mediana;
    if (esPar(lista.length)){
        const elemento1 = lista[mitadLista-1];
        const elemento2 = lista[mitadLista];
        const promedioElemento1y2 = calcularMediaAritmética([
        elemento1,
        elemento2,
        ]);
        mediana = promedioElemento1y2;
    } else {
        mediana =lista[mitadLista]
    }
    const result =document.getElementById("Result");
    result.innerText = "La lista ordenada es " + lista + " y la mediana es "+ mediana;
    return mediana;
}


