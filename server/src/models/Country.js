const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize)=>{
  sequelize.define("Country",{
    id:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey: true,
       
        unique: false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
      },
    flag:{
          type:DataTypes.STRING,
          allowNull:false,
        },
    continents:{
            type:DataTypes.STRING,
            allowNull:false,
        },
    capital:{
            type:DataTypes.STRING,
           allowNull:false,
        },
    subregion:{
            type:DataTypes.STRING,
            allowNull:true
        },
    area:{
            type:DataTypes.INTEGER,
          allowNull:true
        },
    population:{
            type:DataTypes.INTEGER,  
            allowNull:true
        }
    },
    {
        timestamps: false
    }
    );
  };
        
        
           
      
        
          
         
          
          
          
          



     