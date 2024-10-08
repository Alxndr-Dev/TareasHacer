const inquirer = require('inquirer');
require('colors');

//Opciones del menu
const preguntas =[
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
        {
            value: '1',
            name: `${'1'.green}. Crear tarea`
        },
        {
            value: '2',
            name: `${'2'.green}. Listar tareas`
        },
        {
            value: '3',
            name: `${'3'.green}. Listar tareas completadas`
        },
        {
            value: '4',
            name: `${'4'.green}. Listar tareas pendientes`
        },
        {
            value: '5',
            name: `${'5'.green}. Completar tarea(s)`
        },
        {
            value: '6',
            name: `${'6'.green}. Borrar tarea`
        },
        {
            value: '0',
            name: `${'0'.green}. Salir`
        }
    ]
    }
]

//Funcion para mostrar el menu
const inquirerMenu = async() =>{

    console.clear();
    console.log('============================='.green);
    console.log('   Seleccione una opcion'.green);
    console.log('============================= \n'.green);

    //Se muestran las opciones
    const {opcion} = await inquirer.prompt(preguntas);

    //Obtenemos la opcion seleccionada
    return opcion;
}

//Funcion para pausar la aplicacion
//Se pausa hasta que el usuario presione enter
const pausa = async() => {

    //Pregunta para pausar
    const question = [{
        type: 'input',
        name: 'enter',
        message: `Presione ${'Enter'.green} para continuar`
    }];

    console.log('\n');
    
    //Se espera a que el usuario presione enter
    const {enter} = await inquirer.prompt(question);
    
    //Obtenemos el enter
    return enter;


}

module.exports ={
    inquirerMenu,
    pausa
};
