// Simulador de gasto anual en servicios fijos:
<<<<<<< HEAD
// Energía, internet, gas, agua, vivienda, televisión o streaming, teléfono, membresías.

////////////////////////////// NODOS //////////////////////////////
=======

// Energía, internet, gas, agua, vivienda, 
// televisión o streaming, teléfono, membresías.
>>>>>>> 29844cc7cf957c578a85c4b06afb088aa9948c56

// Event listener comienza la función con un click al botón #btn
const btn = document.getElementById('btn');
btn.addEventListener('click', calcularGastos);

<<<<<<< HEAD
///////////////////////////// OBJETOS /////////////////////////////

// Crear objeto usuario
let user = {
  nombre: '',
  gastoAnual: 0,
};

//////////////////////////// FUNCIONES ////////////////////////////

// Función solicitar entrada ciclo
function solicitarEntrada(array) {
  for (let i = 0; i < 10; i++) {
    array.push(
      Number(
        prompt(`Introduce hasta 10 gastos mensuales, has ingresado: ${i}.`)
      )
    );
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
  user.nombre = prompt('Escribe tu nombre.'); // Solicitar nombre a usuario
  console.log(user.nombre);

  // Algoritmo condicional
  if (typeof user.nombre == 'string') {
    alert('Hola ' + user.nombre + ', este programa te ayudará a tener un control de tus gastos anuales en servicios.');
    const modoCalculo = prompt('Para ingresar gastos mensuales escribe "mensual", o bien "semanal" para ingresar los gastos semanales.');

    if (modoCalculo === 'mensual') {
      // Definir Array registro de entradas de prompt mensuales.
      const gastoSuma = [];
      solicitarEntrada(gastoSuma);
      filtrarArray(user, gastoSuma, 12);

      // Salida en alert
      salidaAlert(user);

    } else if (modoCalculo === 'semanal') {
      // Definir Array para registro de entradas semanales.
      const gastoSuma = [];
      solicitarEntrada(gastoSuma);
      filtrarArray(user, gastoSuma, 52);

      // Salida alert
      salidaAlert(user);
=======
// Comienzo función
function calcularGastos() {
  const user = prompt('Escribe tu nombre.'); // Solicitar nombre a usuario
  console.log({ user });

  // Algoritmo condicional
  if (typeof user === 'string') {

    alert('Hola ' + user + ', este programa te ayudará a tener un control de tus gastos anuales en servicios.');
    const modoCalculo = prompt('Para ingresar gastos mensuales escribe "mensual", o bien "semanal" para ingresar los gastos semanales.');
    if (modoCalculo === 'mensual') {

      let gastoAnual = 0;
      for (i = 0; i < 10; i++) { // Algoritmo con ciclo

        let gastoMensual = Number(prompt('Introduce hasta 10 gastos mensuales, has ingresado: ' + i));
        gastoAnual = gastoAnual + gastoMensual;
        console.log({ gastoAnual });

      }

      gastoAnual = gastoAnual * 12;
      alert('Tu gasto anual en servicios es igual a ' + gastoAnual);
      console.log(gastoAnual);

    } else if (modoCalculo === 'semanal') {

      let gastoAnual = 0;
      for (i = 0; i < 10; i++) {

        let gastoSemanal = Number(prompt('Introduce hasta 10 gastos semanales, has ingresado: ' + i));
        gastoAnual = gastoAnual + gastoSemanal;
        console.log({ gastoAnual });

      }
      gastoAnual = gastoAnual * 52;
      alert('Tu gasto anual en servicios es igual a ' + gastoAnual);
      console.log({gastoAnual});
>>>>>>> 29844cc7cf957c578a85c4b06afb088aa9948c56

    } else {
      alert('Ingresa un valor válido');
    }
  }
}