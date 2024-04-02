const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Obtener la fecha y hora actuales
const fechaHoraActual = new Date();

// Estado inicial del motor
let estadoMotor = 'Detenido';

function mostrarMenu() {

    console.clear();

    console.log('Sistema para el control de un motor de corriente directa');
    console.log(fechaHoraActual);
    console.log('Menú');
    console.log('1. Girar en sentido horario');
    console.log('2. Girar en sentido antihorario');
    console.log('3. Detener el motor');
    console.log('4. Salir');
    console.log('Estado del motor:', estadoMotor);

    rl.question('Seleccione una opción:', (opcion) => {
        switch (opcion) {
            case '1':
                estadoMotor = 'Girando en sentido horario';
                mostrarMenu();
                break;
            case '2':
                estadoMotor = 'Girando en sentido antihorario';
                mostrarMenu();
                break;
            case '3':
                estadoMotor = 'Detenido';
                mostrarMenu();
                break;
            case '4':
                console.log('Saliendo del sistema...');
                rl.close();
                break;
            default:
                console.log('Opción inválida. Por favor, seleccione una opción válida.');
                mostrarMenu();
        }
    });
}

mostrarMenu();