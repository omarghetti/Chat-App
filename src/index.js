import express from 'express'
import path from 'path'
import { createServer } from 'http'
import { Server } from 'socket.io'

const app = express()
const server = createServer(app)
const io = new Server(server)

const __dirname = path.resolve();
const port = process.env.PORT || 4000
const publicDirectoryPath = path.join(__dirname, '/public')


app.use(express.static(publicDirectoryPath))

io.on("connection", (socket) => {
    console.log('new websocket connection ready')
    socket.emit('newUser','Welcome to the chat!')
    socket.on('sendMessage', (message) => {
        io.emit('message',message)
    })

})

server.listen(port , () => {
    console.log(`listening on port ${port}!`)
    console.log(publicDirectoryPath)
})

export default server