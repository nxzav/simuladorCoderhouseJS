// Simulador de gasto anual en servicios fijos:
// Energía, internet, gas, agua, vivienda, televisión o streaming, teléfono, membresías.

////////////////////////////// NODOS //////////////////////////////

// Event listener comienza la función con un click al botón #btn
const btn = document.getElementById('btn');
btn.addEventListener('click', calcularGastos);

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
  objeto.gastoAnual = array.reduce((acumulador, valorActual) => {
    return acumulador + valorActual;
  });
  objeto.gastoAnual = objeto.gastoAnual * periodo;
  console.log(objeto);
}

//Función salida en alert
function salidaAlert(objeto) {
  alert(`${objeto.nombre}, tu gasto anual en servicios es de: $${objeto.gastoAnual}.`);
}

//////////////////////////// LÓGICA ////////////////////////////

// Función comenzar programa
function calcularGastos() {
  seleccionarModalidad();

  user.nombre = prompt('Escribe tu nombre.'); // Solicitar nombre a usuario
  console.log(user.nombre);

  // Algoritmo condicional
  if (typeof user.nombre == 'string') {
    alert('Hola ' + user.nombre + ', este programa te ayudará a tener un control de tus gastos anuales en servicios.');
    
    // Se recupera el valor de modalidad desde LocalStorage
    let modalidad = localStorage.getItem("modalidad");

    if (modalidad === 'mensual') {
      // Definir Array registro de entradas de prompt mensuales.
      const gastoSuma = [];
      solicitarEntrada(gastoSuma, 'mensuales');
      filtrarArray(user, gastoSuma, 12);

      // Salida en alert
      salidaAlert(user);

    } else if (modalidad === 'semanal') {
      // Definir Array para registro de entradas semanales.
      const gastoSuma = [];
      solicitarEntrada(gastoSuma, 'semanales');
      filtrarArray(user, gastoSuma, 52);

      // Salida alert
      salidaAlert(user);

    } else {
      alert('Ingresa un valor válido');
    }
  }
  storage.clear();
}