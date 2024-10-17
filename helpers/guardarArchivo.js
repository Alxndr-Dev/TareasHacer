const fs = require('fs');

const archivo = './db/data.json';

//Aqui guardamos la informacion en un archivo JSON
const guardarDB = (data) => {

    fs.writeFileSync(archivo, JSON.stringify(data) );

}

//Aqui leemos la informacion del archivo JSON y la retornamos
const leerDB = () =>{

    //Si el archivo no existe retornamos null
    if (!fs.existsSync(archivo)){
        return null;
    }

    //Si el archivo existe leemos la informacion y la retornamos
    const info = fs.readFileSync(archivo, {encoding: 'utf-8'});
    //Convertimos la informacion a un objeto JSON
    const data = JSON.parse(info);
    //console.log(data);

    //Retornamos la informacion
    return data;
    
}


module.exports = {
    guardarDB,
    leerDB,
};
