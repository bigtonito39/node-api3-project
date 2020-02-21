// code away
const express = require("express")
const userRouter = require("./users/userRouter")
const postRouter = require( "./posts/postRouter")
const welcomeRouter = require("./welcome/welcomeRouter")

const server = express()
const port = 5000;

server.use("/",welcomeRouter)





server.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})
