const eventEmmiter = require('events')

const myEvent = new eventEmmiter()

myEvent.on('greet', () => {
    console.log("hello world")
})

myEvent.emit('greet')
