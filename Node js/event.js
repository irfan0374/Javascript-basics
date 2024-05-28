const eventEmiiter=require('events')

const emiter=new eventEmiiter()
const emiter1=new eventEmiiter()
emiter.on('start',(ready,study)=>{
    console.log(ready,study)
})

emiter.emit("start","ready","study")


