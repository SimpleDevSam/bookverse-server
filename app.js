const express = require("express")
const bookRoute = require("./routes/books")
const favoriteRoute = require ("./routes/favorites")
const userRoute = require("./routes/users")
const commentsRoute = require("./routes/comments.js")
const cors = require("cors")


const app = express()
app.use(express.json())
app.use(cors({origin:"*"}))

app.use("/books", bookRoute)
app.use("/favorites", favoriteRoute)
app.use("/user", userRoute)
app.use("/comments", commentsRoute)

const port = 8000


app.listen(port, () =>{
    console.log(`Listening  gate ${port}`)
})