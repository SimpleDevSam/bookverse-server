const express = require("express")
const bookRoute = require("./routes/books")
const favoriteRoute = require ("./routes/favorites")
const cors = require("cors")
const db = require ("./models/db.js")
const User = require("./models/User")

const app = express()
app.use(express.json())
app.use(cors({origin:"*"}))

app.use("/books", bookRoute)
app.use("/favorites", favoriteRoute)



//exercise example sql
// app.post("/register", async (req,res)=>{
//     console.log(req.body);
//     await User.create(req.body).then (()=>{
//             return res.json({
//                 error:false,
//                 message:"ADDED"
//             })
//     }).catch(()=>{
//             return res.status(404),json({
//                 error:false,
//                 message:"Erro"
//             })    })
//     res.send("Página Cadastrar")
// })
//finalize example
const port = 8000


app.listen(port, () =>{
    console.log(`Listening  gate ${port}`)
})