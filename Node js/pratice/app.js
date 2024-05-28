// const express = require('express');
// const app = express();

// app.listen(3000, () => {
//   console.log("Server is running successfully on port 3000");
// });

// app.use((req,res,next)=>{
//     console.log("jello world")
//     next()
// })
// app.use((req,res,next)=>{
//     console.log("hello middlware")
//    next()
// })

// app.get('/', (req, res) => {
//   res.send('<p>home page</p>');
// });
// app.get('/about', (req, res) => {
//   res.send('<p>about page</p>');
// });


const http=require("http")
const fs=require('fs')

const server=http.createServer((req,res)=>{
  // res.writeHead(200,{"Content-Type":"text/plain"});


  // let html=fs.readFileSync('./index.html',"utf-8")    //read the html content
  // res.end(html)

  // fs.createReadStream(__dirname+"/index.html").pipe(res)  // using pipe method read the html content

  if(req.url=='/'){
    res.writeHead(200,{"Content-Type":"text/plain"})
    res.end("home page")
  }else if(req.url=='/about'){
    res.writeHead(200,{"Content_Type":"text:html"})
res.end(JSON.stringify({name:"irfan",age:"22"}))

}else{
    res.writeHead(404)
    res.end("page not found")
  }

  
})

server.listen(3000,()=>{
  console.log("server running succefull")
})
function auth(req,res,next){
  if(req.query==true){
    next()
  }else{
    res.send('no auth')
  }
 
}

app.get('/user',auth,(req,res)=>{
  console.log("hello world")
})