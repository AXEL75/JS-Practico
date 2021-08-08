var cupos = function () {
    const cupons = [10, 25, 50,75];
    const cupon = document.getElementById("cupons");
    const valueCupon = parseInt(cupon.value);
    if (valueCupon === cupons[0]) {
        return 0.1;
    } else if (valueCupon === cupons[1]) {
        return 0.25;
    } else if (valueCupon === cupons[2]) {
        return 0.50;
    } else if (valueCupon === cupons[3]) {
        return 0.75;
    }else {
        return 0
    }
}

function calcularPrecioConDescuento(precio){
    const porcentajePrecioConDescuento = 1 - cupos();
    const precioConDescuento = (precio*porcentajePrecioConDescuento);

    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = parseInt(inputPrice.value);
    const precioConDescuento = calcularPrecioConDescuento(priceValue);

    const result =document.getElementById("ResultPrice");
    result.innerText = "El precio con descuento es: $" + precioConDescuento;

}

//A console.log podemos enviarle un objeto

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });

