/* Este código utiliza el módulo mongoose para establecer una conexión a una base de datos*/
const mongoose= require("mongoose");

/*En esta línea, se importa el módulo mongoose que permite interactuar con una base de datos MongoDB desde Node.js. Es necesario tener el módulo
 mongoose instalado previamente para que esto funcione.*/ 

const conexion = async() => {
  /**/ 
    try{
    await mongoose.connect("mongodb://localhost:27017/mi_blog");

    //parametros dentro de objeto // solo en casa de aviso
    //useNewUrlParser :true
    //useUnifiedTopoLogy :true
    //useCreateIndex: true
    
    console.log("Conectado correctamente a la base de datos mi_blog !! ")

    } catch(error){
        console.log(error);
        /*es una declaración utilizada en JavaScript y, por lo tanto, 
        también en Node.js, para lanzar un error manualmente.*/ 
        throw new Error("No se ha podido conectar a la base de datos")

    }

module.exports = {
    conexion
}
}    

