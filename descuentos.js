const precioOriginal = 120;
const descuento = 18;

function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio*porcentajePrecioConDescuento) /100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = parseInt(inputPrice.value);

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = parseInt(inputDiscount.value);

    const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue);

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

