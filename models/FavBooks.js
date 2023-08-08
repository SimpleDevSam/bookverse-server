const Sequelize = require("sequelize")
const db = require("./db")

const FavBooks = db.define("favbooks",{

    bookid:{
        type:Sequelize.INTEGER,
        allowNull: false
    },
    name :{
        type:Sequelize.STRING,
        allowNull:false 
    },
    userid:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
}
)

//Create table if doesn't exists
//FavBooks.sync({force:true});

module.exports = FavBooks

