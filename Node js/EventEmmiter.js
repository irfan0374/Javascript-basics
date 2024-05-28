const eventEmmiter = require('events')

const myEvent = new eventEmmiter()

myEvent.on('greet', () => {
    console.log("hello world")
})

myEvent.emit('greet')



const emitter=require('events')


const event=new emitter()
event.on("start",()=>{
    console.log("hello lets go")
})
event.emit("start")