// Simulador de gasto anual en servicios fijos:

// Energía, internet, gas, agua, vivienda, 
// televisión o streaming, teléfono, membresías.

// Event listener comienza la función con un click al botón #btn
const btn = document.getElementById('btn');
btn.addEventListener('click', calcularGastos);

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

    } else {
      alert('Ingresa un valor válido');
    }
  }
}