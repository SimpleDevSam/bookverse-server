const Sequelize = require("sequelize")

const sequelize = new Sequelize("bookverse", "root", "S@muelufop123", {
    host: "localhost",
    dialect: "mysql"

}
)

sequelize.authenticate()
.then(()=>{
    console.log("Conexão com banco de dados realizada")

}).catch(()=>
console.log("Erro:conexão com banco de dados não realizada"))

module.exports = sequelize
