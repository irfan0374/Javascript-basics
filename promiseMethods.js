// promise.allSettled

let promise1=new Promise((resolve,rej)=>setTimeout(()=>resolve("promise1"),2000))
let promise2=new Promise((resolve,rej)=>setTimeout(()=>resolve("promise2"),2000))
let promise3=new Promise((resolve,rej)=>setTimeout(()=>rej(new Error("erorr")),1000))

Promise.allSettled([promise1,promise2,promise3]).then((res)=>{
    console.log(res)
}).catch((error)=>{
    console.log(error.message)
})

// promise.race

Promise.race([promise1,promise2]).then((res)=>{
    console.log(res)
}).catch((error)=>{
    console.log(error.message)
})

// Promise.all
Promise.all([promise1,promise2])
