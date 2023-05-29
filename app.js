const express = require("express")
const bookRoute = require("./routes/books")

const app = express()
app.use(express.json())

app.use("/books", bookRoute)

const port = 8000

app.listen(port, () =>{
    console.log(`Listening  gate ${port}`)
})