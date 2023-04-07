// Simulador de gasto anual en servicios fijos:
// Energía, internet, gas, agua, vivienda, televisión o streaming, teléfono, membresías.

////////////////////////////// NODOS //////////////////////////////

// Event listener comienza la función con un click al botón #btn
const btn = document.getElementById('btn');
btn.addEventListener('click', calcularGastos);

// Captura de elemento nombre
const nombre = document.getElementById('nombre');

// Contenedor tipo cambio para mostrar datos extraídos de API
const tipoCambio = document.getElementById('dolarHoy');

// Consumo de API con fetch
fetch('https://www.banxico.org.mx/SieAPIRest/service/v1/series/SF43718/datos/oportuno?token=cc04984cb58bccc174375f80930c952cee025b5272e6a23d3306e1af4306a868')
  .then(res => res.json())
  .then(data => {
    const dataExtraida = data.bmx.series[0].datos[0].dato;
    console.log(dataExtraida);
    tipoCambio.innerText = `Tipo de cambio MXN/USD: ${dataExtraida}.`;
    localStorage.setItem("tipoDeCambio", dataExtraida);
  })

// Query selector captura el valor del selector de modalidad

const mod = document.getElementById('mod');
function seleccionarModalidad() {
  const modalidad = mod.value;
  localStorage.setItem("modalidad", modalidad); // LocalStorage guarda valor modalidad
};

///////////////////////////// OBJETOS /////////////////////////////

// Crear objeto usuario
let user = {
  nombre: '',
  gastoAnual: 0,
};

//////////////////////////// FUNCIONES ////////////////////////////

// Función solicitar entrada ciclo
function solicitarEntrada(array, modo) {
  for (let i = 0; i < 10; i++) {
    array.push(
      Number(prompt(`Introduce hasta 10 gastos ${modo}, has ingresado: ${i}.`)));
    console.log(array); // Control de flujo Array
  }
  console.log({ array });
}

// Función filtrar Array y sumar elementos
function filtrarArray(objeto, array, periodo) {
  objeto.gastoAnual = array.reduce((acumulador, valorActual) => acumulador + valorActual);
  objeto.gastoAnual = objeto.gastoAnual * periodo;
  console.log(objeto);
}

//Función salida en DOM
function mensajeSalida(objeto, moneda) {
  const mensaje = document.createElement('h3');
  mensaje.innerText = `${objeto.nombre}, tu gasto anual en servicios es de: $${objeto.gastoAnual} MXN.`
  const divMensaje = document.getElementById('mensaje');
  divMensaje.append(mensaje);

  setTimeout(() => {
    divMensaje.removeChild(mensaje);
  }, 5000);

  Toastify({
    text: `${objeto.nombre}, tu gasto anual en servicios es de: $${objeto.gastoAnual} MXN.`,
    position: 'center',
    gravity: 'bottom',
    style: {
      margin: '2rem',
      background: '#587ca5',
      fontSize: '1.2rem',
    },
    duration: 5000,
  }).showToast();

  // alert(`${objeto.nombre}, tu gasto anual en servicios es de: $${objeto.gastoAnual}.`);
}

//////////////////////////// LÓGICA ////////////////////////////

// Función comenzar programa
function calcularGastos() {
  seleccionarModalidad();

  user.nombre = nombre.value; // Leyendo desde input en DOM
  console.log(user.nombre);

  // Algoritmo condicional
  if (typeof user.nombre == 'string') {
    Swal.fire(
      'Hola ' + user.nombre + ', este programa te ayudará a tener un control de tus gastos anuales en servicios.'
      );
    
    // Se recupera el valor de modalidad desde LocalStorage
    let modalidad = localStorage.getItem("modalidad");
    let dolar = localStorage.getItem('tipoDeCambio');
    parseInt(dolar);

    setTimeout(() => {
      if (modalidad === 'mensual') {
        // Definir Array registro de entradas de prompt mensuales.
        const gastoSuma = [];
        solicitarEntrada(gastoSuma, 'mensuales');
        filtrarArray(user, gastoSuma, 12);
  
        // Salida en alert
        mensajeSalida(user, dolar);
  
      } else if (modalidad === 'semanal') {
        // Definir Array para registro de entradas semanales.
        const gastoSuma = [];
        solicitarEntrada(gastoSuma, 'semanales');
        filtrarArray(user, gastoSuma, 52);
  
        // Salida alert
        mensajeSalida(user, dolar);
  
      } else {
        Toastify({
          text:'Ingresa una modalidad válida.',
          position: 'center',
          gravity: 'bottom',
          style: {
            background: '#394a4b',
            fontSize: '1.2rem',
            boxShadow: '0px 10px 15px #00000042',
          }
        }).showToast();
      }
    }, 4000);
  }
  localStorage.clear();
}