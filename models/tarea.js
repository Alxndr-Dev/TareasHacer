const {v4: uuidv4} = require('uuid')

//Aqui creamos la clase Tarea con sus atributos
class Tarea{

    //Inicializamos el id, la descripcion y la fecha de completado en null
    id = '';
    desc = '';
    completadoEn = null;

    //Creamos un constructor para inicializar la tarea
    constructor(desc){

        //Inicializamos el id con un id unico
        this.id = uuidv4();
        //Inicializamos la descripcion con la descripcion que recibimos
        this.desc = desc;
        //Inicializamos la fecha de completado en null
        this.completadoEn = null;
    }

}


module.exports = Tarea;
