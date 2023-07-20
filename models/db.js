const Sequelize = require("sequelize")

const sequelize = new Sequelize("railway", "root", "K8R2RDBwl4a7xxizxD2q", {
    host: "containers-us-west-156.railway.app",
    dialect: "mysql",
    port:"5688"

}
)

sequelize.authenticate()
.then(()=>{
    console.log("Conexão com banco de dados realizada")

}).catch(()=>
console.log("Erro:conexão com banco de dados não realizada"))

module.exports = sequelize
