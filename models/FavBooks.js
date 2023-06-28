const Sequelize = require("sequelize")
const db = require("./db")

const FavBooksdb = db.define("favbooks",{
    id:{
        type:Sequelize.INTEGER,
        allowNull: false,
        primaryKey:true
    },
    name :{
        type:Sequelize.STRING,
        allowNull:false,  
    },
    category :{
        type:Sequelize.STRING,
        allowNull:false,  
    },
}
)

//Create table if doesn't exists
//FavBooksdb.sync();

module.exports = FavBooksdb