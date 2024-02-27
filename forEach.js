// const obj={
//     name:"irfan",
//     age:33,
//     position:"developer"
// }

// Object.values(obj).forEach((item)=>{
//     console.log(item)
// })


let promise1=new Promise((res,rej)=>{
    setTimeout(()=>{
        res("succesfull")
    },2000)
})
let promise2=new Promise((res,rej)=>{
    setTimeout(()=>{
        rej(new Error("something went wrong"))
        
    },2000)
})


let result=Promise.any([promise1,promise2]).then((res)=>{
    console.log(res)
}).catch((error)=>{
    console.log(error.message)
})