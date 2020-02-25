// code away
const express = require("express")
const userRouter = require("./users/userRouter")
const postRouter = require( "./posts/postRouter")
const welcomeRouter = require("./welcome/welcomeRouter")
const logger = require("./middlewares/logger")

const server = express()
const port = 5000;
//Really make sure you use this to enable transfering json files
server.use(express.json())

server.use(logger("short")) // place "short" if you want to run short version or take value out if you want to run long



server.use("/",welcomeRouter)
server.use("/api/users",userRouter)
server.use("/api/posts",postRouter )






server.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})
