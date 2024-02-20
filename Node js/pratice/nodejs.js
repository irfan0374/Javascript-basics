
// read file

const fs = require('fs')
// fs.readFile('./blo.txt',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString())
// })

// write file

// fs.writeFile('./blog.txt',"hello world",()=>{
//     console.log("file written")
// })


// create a directory/folder

// if (!fs.existsSync('./asstes')) {
//     fs.mkdir('./asstes', (err) => {
//         if (err) {
//             console.log(err.message)
//         }
//         console.log("create a assets folder")
//     })
// } else {
//     fs.rmdir('./asstes', (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log("file deleted")
//     })
// } 

// delete the file

// if(fs.existsSync('./blog.txt')){
//     fs.rmdir('./blog.txt',(err)=>{
//         if(err){
//             console.log(err)
//             return
//         }
//         console.log("file remove success")
//     })
// }else{
//     console.log("sherikum nook")
// }


// const readStream=fs.createReadStream('./blog.txt',{encoding:'utf8'})

// readStream.on('data',(chunk)=>{
//     console.log("=======chunk===")
//     console.log(chunk)
// })


// const http=require('http')


// const server=http.createServer((req,res)=>{
//     console.log(req.url,req.method)
//     res.setHeader('Content-Type','text/html')
//     fs.readFile('../index.html/',(err,data)=>{
//         if(err){
//             console.log(err)
//             res.end()
//         }
//         res.write(data)
//         res.end()
//     })
  
// })

// server.listen(3000,'localhost',()=>{
//     console.log('listen server by 3000')
// })


