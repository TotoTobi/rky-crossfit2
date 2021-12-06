// PRIMER DESAFIO
/*let apellido = prompt("¡Hola Ale, por favor ingresa tu apellido a continuación!.");
let saludo = "Alejandro" + " " + apellido + " " + "buen dia";
alert (saludo);*/


// SEGUNDO DESAFIO
// let usuarioNumero = prompt('ingrese Un numero');

// if (usuarioNumero > 1000){
//   alert("ingresaste un numero mayor a mil");
// } else(usuarioNumero < 1000);{
//   alert("Ayy!! perdiste, tenias que poner un numero mayor a mil");
// }


// let saludo = "hola" ;
// let palabraUsuario = prompt('Salude por favor');

// if (palabraUsuario === saludo){
//   console.log("El usuario a saludado");
// }


// TERCER DESAFIO
// let producto = prompt('¡Ingrese el numero de su producto a comprar, por favor!.');

// switch (producto) {
//   case '1':
//     alert('Gracias por tu compra. Acabas de Comprar una remera.');
//   break;

//   case '2':
//     alert('Gracias por tu compra. Acabas de Comprar un Buzo de RKY.');
//     break;
  
//   case '3':
//     alert('Gracias por tu compra. Acabas de Comprar una botella de RKY.');
//     break;

//   case '4':
//     alert('Gracias por tu compra. Acabas de Comprar un par de calleras.');
//     break;

//   default:
//     alert('No comprastre ningun producto, por favor volve a cargar la pagina para poder realizar una compra si asi lo desea. Muchas Gracias');  
//     break;
// }


// DESAFIO DE DOM
let sectionArticulos = document.querySelector("#articulosTitulo");

sectionArticulos.innerHTML += `<h1>NUESTRA TIENDA</h1>`;

const productos = [
  {
    id: 1, nombre:"Remera de rky, N° de Producto: 1.", precio: `$1500`
  },

  {
    id: 2, nombre:"Buzo Gris de rky, N° de Producto: 2.", precio: `$4500`
  },

  {
    id: 3, nombre:"Botella de rky, N° de Producto: 3.", precio: `$1000`
  },

  {
    id: 4, nombre:"Calleras gimnasticas de cuero, N° de Producto: 4.", precio: `$1000`
  },
];

let muestrario = document.querySelector("#muestrario");

for (var i = 0; i < productos.length; i++) {
  muestrario.innerHTML +=` 
  <article>
    <h4>${productos[i].nombre}</h4>
    <p>${productos[i].precio}</p>
    <button id="botonDeCompra"> COMPRAR </button>
    </article>
  `
};

let carrito = [];

document.getElementById("botonDeCompra").onclick = function() { 
  carrito.push
  console.log(carrito)
  alert("Compraste un producto de nuestra tienda, por favor ir al box para retirarlo.")
};
