const Sequelize = require("sequelize")
const db = require("./db")

const Comments = db.define("comments",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey:true
    },
    bookid:{
        type:Sequelize.INTEGER,
        allowNull: false
    },
    userid:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    content:{
        type:Sequelize.TEXT("long"),
        allowNull:false
    },
    isactive:{
        type:Sequelize.BOOLEAN,
        allowNull:false
    }
}
)

//Create table if doesn't exists
//Comments.sync({force:true});

module.exports = Comments

