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

    cargarTareasFromArray( tareas = [] ){
        //Recorremos el array de tareas y las almacenamos en el listado
        tareas.forEach(tarea =>{
            //Agregamos la tarea al listado
            this._listado[tarea.id] = tarea;
        })
    }

    //Creamos un metodo para cargar las tareas
    crearTarea( desc = '' ){
        
        //Creamos una nueva tarea
        const tarea = new Tarea(desc); 
        //Agregamos la tarea al listado
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto(){

        console.log();
        //Obtenemos el listado de tareas
        this.listadoArr.forEach((tarea , i)=>{
            //Generamos el indice de la tarea
            const indice = `${i + 1}`.green;
            //Obtenemos la descripcion y el estado de la tarea
            const {desc, completadoEn} = tarea;
            //Evaluar si la tarea esta completada
            const estado = (completadoEn) ? 'Completado'.green : 'Pendiente'.red;
            //Imprimimos la tarea
            console.log(`${indice} ${desc} :: ${estado}`);


        })

    }

    listarPendientesCompletadas( completadas = true ){

        console.log();
        let contador = 0;

        this.listadoArr.forEach(( tarea )=>{

        const {desc, completadoEn} = tarea;
        const estado = ( completadoEn ) ? 'Completado'.green : 'Pendiente'.red;

        if(completadas){
            if(completadoEn){
                contador += 1;
                console.log(`${( contador + '.' ).green}  ${desc} :: ${completadoEn.green}`);
            }
        }else {
            if(!completadoEn){
                contador += 1;
                console.log(`${( contador + '.' ).green}  ${desc} :: ${estado}`);
            }
        }
        
        
        })

    }


}



module.exports = Tareas;