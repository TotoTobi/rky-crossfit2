let usuario = prompt('Hola, ingrese su nombre.');

function saludo () {
  alert(`Hola ${usuario}, a continuación eliga el numero su producto a comprar.`);
}

saludo()

let productosYPrecios = alert('1. Remeras $1500 , 2. Buzo $4500 , 3. Botella $1000 , 4. Calleras $1000.');

const precioFinal = (a, b) => {
   return a * b;
}

const vuelto = (a, b) => {
  return a - b;
}

const productos = [
  {
    id: 1, nombre:"remera blanca de rky", precio: 1500
  },

  {
    id: 2, nombre:"buzo Gris de rky", precio: 4500
  },

  {
    id: 3, nombre:"botella de rky", precio: 1000
  },

  {
    id: 4, nombre:"calleras gimnasticas de cuero", precio: 1000
  }
];

function compra() {
  let mensaje = '';
  let precio = 0;
  let producto = prompt('¡Ingrese el numero de su producto a comprar, por favor!.');
  let cantidad = Number(prompt('Ingrese su cantidad que desee comprar'));
  let dineroIngresado = Number(prompt('¿Con cuanto desea abonar?'));

  switch (producto) {
    case '1':
      precio = 1500; 
      precio = precioFinal(precio, cantidad);
      mensaje = `Gracias por tu compra. Acabas de Comprar ${cantidad} ${productos.1} de RKY. Y tu monto a pagar a pagar es  ${precio}`;
      break;

    case '2':
      precio = 4500;
      precio = precioFinal(precio, cantidad)
      mensaje = `Gracias por tu compra. Acabas de Comprar ${cantidad} ${productos.2} de RKY. Y tu monto a pagar a pagar es ${precio}`;
      break;

    case '3':
      mensaje = `Gracias por tu compra. Acabas de Comprar ${cantidad} ${productos.3} botella/s de RKY. Y tu monto a pagar a pagar es ${precio}`;
      precio = 600;
      precio = precioFinal(precio, cantidad)
      break;

    case '4':
      mensaje = ´Gracias por tu compra. Acabas de Comprar ${cantidad} ${productos.4} de RKY. Y tu monto a pagar a pagar es ${precio}`;
      precio = 1200;
      precio = precioFinal(precio, cantidad)
      break;

    default:
      alert('No comprastre ningun producto, por favor volve a cargar la pagina para poder realizar una compra si asi lo desea. Muchas Gracias.');
      break;
  }
  alert(mensaje);
}

compra();