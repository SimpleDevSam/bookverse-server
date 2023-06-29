const Sequelize = require("sequelize")
const db = require("./db")

const FavBooks = db.define("favbooks",{
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
//FavBooks.sync();

module.exports = FavBooks

