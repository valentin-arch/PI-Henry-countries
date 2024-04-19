const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize)=>{
        sequelize.define("Activity",{        
            Name:{
                type:DataTypes.STRING,
                
               
            },
            Difficulty:{
                type:DataTypes.FLOAT,
                validate:{
                    min:1.0,
                    max:5
                }
            },
            Duration:{
                type:DataTypes.STRING
            },
            Season:{
                type:DataTypes.ENUM("WINTER","SUMMER","AUTUMN","SPRING"),
                
            },
            Cost:{
                type:DataTypes.STRING,
                AllowNull:false

            }
        })
}

