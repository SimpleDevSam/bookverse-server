const Sequelize = require("sequelize")
const db = require("./db")

const Booksdb = db.define("books",{
    bookid:{
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
    author :{
        type:Sequelize.STRING,
        allowNull:false,  
    },
    abstract :{
        type:Sequelize.TEXT('long'),
        allowNull:false,  
    },
}
)


//Booksdb.sync({force:true})

module.exports = Booksdb