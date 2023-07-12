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

const port = 8000


app.listen(port, () =>{
    console.log(`Listening  gate ${port}`)
})