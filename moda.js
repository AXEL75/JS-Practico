
function calcularModa (lista){
    const lista1Count = {};

    lista.map(
        function (elemento){
            if (  lista1Count[elemento] ){
                lista1Count[elemento] +=1;
            } else {
                lista1Count[elemento] = 1;
            }
        }
    );
    
    //Al Object se le envía como argumento un objeto para que sea convertido a array
    const lista1Array = Object.entries(lista1Count).sort(
        function (vAcumulado, newElemento){
        return vAcumulado[1] - newElemento[1]
        }
    );
    
    const moda = lista1Array[lista1Array.length-1]
    return parseInt(moda[0]);
}

