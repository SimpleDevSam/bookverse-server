const express = require("express")
const bookRoute = require("./routes/books")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors({origin:"*"}))

app.use("/books", bookRoute)

const port = 8000

app.listen(port, () =>{
    console.log(`Listening  gate ${port}`)
})