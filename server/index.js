const server = require("./server")
const UserModel = require("./db/Schemas/User")
const port = process.env.PORT || 80

server.listen(port ,()=>{
    console.log(`the server is runing on port ${port}`)
})
