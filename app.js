require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const {inquirerMenu, 
    pausa, 
    leerInput,
    listadoTareasBorrar,
    confirmar,
} = require('./helpers/inquirer');

const Tareas = require('./models/tareas');



const main = async() =>{

    let opt = '';
    const tareas = new Tareas();
    const tareasDB = leerDB();

    if(tareasDB){
        //Establecer las tareas
        tareas.cargarTareasFromArray(tareasDB);
    }

    //Se ejecuta el menu hasta que el usuario seleccione la opcion de salir
    do{
        //Se muestra el menu y se obtiene la opcion seleccionada
        opt = await inquirerMenu();
        
        //Se ejecuta la opcion seleccionada
        switch (opt) {
            //Se crea una tarea
            case '1':
                //Se obtiene la descripcion de la tarea
                const desc = await leerInput('Descripcion:');
                //Se crea la tarea
                tareas.crearTarea(desc);
                break;
        
            //Se listan las tareas
            case '2':
                //Se listan las tareas
                tareas.listadoCompleto();
                break;

            //Se listan las tareas completadas
            case '3':
                tareas.listarPendientesCompletadas(true);
                break;
            
            //Se listan las tareas pendientes
            case '4':
                tareas.listarPendientesCompletadas(false);
                break;

            case '6': //Borrar tarea
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if (id !== '0'){
                    const ok = await confirmar('¿Estas seguro?');
                    if (ok){
                        tareas.borrarTarea(id);
                        console.log('Tarea borrada');
                    }
                }
                break;

        }

        guardarDB(tareas.listadoArr);


        //Se pausa la aplicacion mientras el usuario no presione enter
        if(opt !== '0') await pausa();
    
        //Se repite el ciclo hasta que el usuario seleccione la opcion de salir
    } while( opt !== '0');


}


main();