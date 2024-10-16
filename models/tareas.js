const Tarea = require('./tarea');

//Aqui creamos la clase Tareas donde almacenaremos las tareas

class Tareas {

    //Inicializamos el listado de tareas
    _listado = {};

    //Creamos un getter para obtener el listado de tareas
    get listadoArr(){

        //Creamos un array vacio para almacenar las tareas
        const listado = [];
        //Recorremos el objeto _listado y lo almacenamos en el array listado
        Object.keys(this._listado).forEach( key =>{
            //Obtenemos la tarea por su key
            const tarea = this._listado[key];
            //Agregamos la tarea al array listado
            listado.push(tarea);
        })

        //Retornamos el array listado
        return listado;
    }

    //Creamos un constructor
    constructor(){
        //Inicializamos el listado de tareas
        this._listado = {};
    }

    //Creamos un metodo para cargar las tareas
    crearTarea(desc = ''){
        
        //Creamos una nueva tarea
        const tarea = new Tarea(desc); 
        //Agregamos la tarea al listado
        this._listado[tarea.id] = tarea;
    }

}



module.exports = Tareas;