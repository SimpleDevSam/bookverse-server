const Sequelize = require("sequelize")
const db = require("./db")

const Booksdb = db.define("books",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
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


//Booksdb.sync();

module.exports = Booksdb