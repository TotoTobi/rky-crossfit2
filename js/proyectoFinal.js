let producto1 = 1
let producto2 = 2
let producto3 = 3
let producto4 = 4

let precioRemera = 900
let precioBuzo = 1400
let precioBotella = 600
let precioCalleras = 1200

let usuario = prompt('Hola, ingrese su nombre.');

let bienvenida = "Hola" + " " + usuario + ", a continuación eliga el numero su producto a comprar.";

alert(bienvenida);

let productosYPrecios = "1. Remeras $900 , 2. Buzo $1400 , 3. Botella $600 , 4. Calleras $1200.";

alert(productosYPrecios);

let producto = prompt('¡Ingrese el numero de su producto a comprar, por favor!.');


if (producto == producto1){
  alert('Comprastre una remera');
  

} else if (producto == producto2){
  alert('Comprastre un buzo');
  

} else if (producto == producto3){
  alert('Comprastre una botella');
  

} else if (producto == producto4){
  alert('Comprastre unas calleras');
  

} else (producto != producto1 || producto2 || producto3 || producto4);{
  alert('No comprastre ningun producto, volve a cargar la pagina para poder hacer una compra. Muchas Gracias');
}







