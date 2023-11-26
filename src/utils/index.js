// Funcion para sumar los productos del carrito y obtener el precio total
export const totalPrice = (products) => {

    let sum = 0
    products.forEach(product => sum += product.price);
    return sum

}