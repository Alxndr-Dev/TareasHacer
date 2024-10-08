require('colors');

const {inquirerMenu, pausa} = require('./helpers/inquirer');
console.clear();

const main = async() =>{


    console.log('Hola mundo');

    let opt = '';

    //Se ejecuta el menu hasta que el usuario seleccione la opcion de salir
    do{
        //Se muestra el menu y se obtiene la opcion seleccionada
        opt = await inquirerMenu();
        console.log({opt});

        //Se pausa la aplicacion mientras el usuario no presione enter
        if(opt !== '0') await pausa();
    
        //Se repite el ciclo hasta que el usuario seleccione la opcion de salir
    } while( opt !== '0');


}


main();