
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