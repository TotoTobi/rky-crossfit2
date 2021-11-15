let usuario = prompt('Hola, ingrese su nombre.');

function saludo () {
  alert(`Hola ${usuario}, a continuación eliga el numero su producto a comprar.`);
}

saludo()

let productosYPrecios = alert('1. Remeras $900 , 2. Buzo $1400 , 3. Botella $600 , 4. Calleras $1200.');

const precioFinal = (a, b) => {
   return a * b;
}

const vuelto = (a, b) => {
  return a - b;
}




function compra(Productos) {
  let mensaje = '';
  let precio = 0;
  let seleccion = prompt('¡Ingrese el numero de su producto a comprar, por favor!.');
  let cantidad = Number(prompt('Ingrese su cantidad que desee comprar'));
  let dineroIngresado = Number(prompt('¿Con cuanto desea abonar?'));
//   class Productos{
//   constructor(nombre, Precio){
//      this.nombre = nombre;
//      this.precio = precio;
//    }
//  }

// const object1 = new Productos(remera/s);
// const object2 = new Productos(buzo/s)
// const object3 = new Productos(botella/s);
// const object4 = new Productos(calleras/s);

  switch (producto) {
    case '1':
      precio = 900; 
      precio = precioFinal(precio, cantidad);
      mensaje = `Gracias por tu compra. Acabas de Comprar ${cantidad}  de RKY. Y tu monto a pagar a pagar es ${precio}`;
      break;

    case '2':
      precio = 1400;
      precio = precioFinal(precio, cantidad)
      mensaje = `Gracias por tu compra. Acabas de Comprar ${cantidad} buzo/s de RKY. Y tu monto a pagar a pagar es ${precio}`;
      break;

    case '3':
      mensaje = `Gracias por tu compra. Acabas de Comprar ${cantidad} botella/s de RKY. Y tu monto a pagar a pagar es ${precio}`;
      precio = 600;
      precio = precioFinal(precio, cantidad)
      break;

    case '4':
      mensaje = `Gracias por tu compra. Acabas de Comprar ${cantidad} callera/s de RKY. Y tu monto a pagar a pagar es ${precio}`;
      precio = 1200;
      precio = precioFinal(precio, cantidad)
      break;

    default:
      alert('No comprastre ningun producto, por favor volve a cargar la pagina para poder realizar una compra si asi lo desea. Muchas Gracias.');
      break;
  }
  alert(mensaje);
}

compra()


// const object1 = new Productos(remera/s, $900);
// const object2 = new Productos(buzo/s, $1400)
// const object3 = new Productos(botella/s, $600);
// const object4 = new Productos(calleras/s, $1200);