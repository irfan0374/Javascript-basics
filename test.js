
let x = (x,y,...c) => {
let flag=true
    for (let i = 2; i < x/2; i++) {
        if (x%i==0){
            flag=false
        }
}
if(flag){
    console.log("isPrime")
}else{
    console.log("Is not prime")
}
if(y%2!=0){
    console.log("isodd")
}else{
    console.log("notOdd")
}
let sum=0
for(let i=0;i<c.length;i++){
    sum+=c[i]
}
console.log(sum)

}

    x(2, 3, 4, 5, 5)