// setTimeout 

// setTimeout(()=>{
//     console.log("hello world")
// },2000)


// setInterval

// let count=0
// let timer=setInterval(()=>{
//     console.log(`timout${count}`)
//     count++;

//     if(count==5){
//         clearInterval(timer)
//     }

// },1000)

// setImmediate

const immediateId = setImmediate(() => {
    console.log('Immediate execution');
});
