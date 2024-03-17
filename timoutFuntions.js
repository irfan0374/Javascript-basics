


// let count=0;
// let interval=setInterval(()=>{
//     console.log(count)
//     count++
//     if(count==3){
//          clearInterval(interval)
//     }
// },1000)




// const timeout=setTimeout(()=>{

//     console.log("hello")
// },200)



 function fetchDate(num){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(num%2==0){
                res("succesfull")
            }else{
                rej(new Error("something went wrong"))
            }
            
        },2000)
    })
}
async function fetch(num){
    try{
        const res=await fetchDate(num)
        console.log(res)
        
    }catch(error){
        console.log(error.message)
    }
}

console.log(fetch(2))