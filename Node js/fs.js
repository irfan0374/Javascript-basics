const fs=require('fs').promises


// fs.readfile


// const data=fs.readFile('./file.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

    // const data=fs.readFileSync('./file.txt','utf-8')
    // console.log(data)
    // console.log("1")



// fs.writeFile


// fs.writeFile('./file2.txt',"utf-8")
// .then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log(error.message)
// })



// // fs.promise

// fs.readFile('file.txt','utf-8').then((data)=>{
//     console.log(data)
// }).catch((error){
//     console.log(error.message)
// })


// async and await 

// const data=async()=>{
//     try {
//       const res=await fs.readFile('file.txt',"utf-8")  
//       console.log(res)
//     } catch (error) {
//         console.log(error.message)
//     }
// }

// data()