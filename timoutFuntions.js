


let count=0;
let interval=setInterval(()=>{
    console.log(count)
    count++
    if(count==3){
         clearInterval(interval)
    }
},1000)




const timeout=setTimeout(()=>{

    console.log("hello")
},200)