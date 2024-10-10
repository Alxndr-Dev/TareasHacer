require('colors');

const {inquirerMenu, 
    pausa, 
    leerInput
} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');



const main = async() =>{


    let opt = '';
    const tareas = new Tareas();

    //Se ejecuta el menu hasta que el usuario seleccione la opcion de salir
    do{
        //Se muestra el menu y se obtiene la opcion seleccionada
        opt = await inquirerMenu();
        
        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion:');
                tareas.crearTarea(desc);
                break;
        
            case '2':
                console.log(tareas._listado);
                break;

        }




        //Se pausa la aplicacion mientras el usuario no presione enter
        if(opt !== '0') await pausa();
    
        //Se repite el ciclo hasta que el usuario seleccione la opcion de salir
    } while( opt !== '0');


}


main();