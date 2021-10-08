const socket = io()

socket.on('newUser', (message) => {
    console.log(message)
    document.querySelector('#welcomeMessage').append(message)
})

socket.on('message',(message) => {
    console.log(message)
})

document.querySelector('#messageForm').addEventListener('submit', (e) => {
    e.preventDefault()
    let message = document.querySelector('input').value
    socket.emit('sendMessage',message)
})