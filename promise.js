
// promise is the eventual completion or the failture of the asynchronous operation .

function fetchData(data){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            
            if(data%2==0){
                res("The data even")
            }else{
                rej(new Error("data is odd"))
            }
        },2000)
    })
}

fetchData(2).then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err.message)
})



fetchData().then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(error.message)
})



function fetchData(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("successull")
        },2000)
    })
}