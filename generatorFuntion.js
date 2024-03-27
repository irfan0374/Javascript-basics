
// function * countUp(limit){
//     let count=1
//     while(count<=limit){
//         yield count;
//         count++
//     }
// }
// let counter=countUp(5)
// console.log(counter.next().value)
// console.log(counter.next().value)
// console.log(counter.next().value)
// console.log(counter.next().value)
// console.log(counter.next().value)




// find the even number using generator function

function * generator(limit){
    let count=1;
    while(count<=limit){
        if(count%2==0){
            yield count
        }
        count++
    }
}
const hello=generator(10)
console.log(hello.next().value)
console.log(hello.next().value)
console.log(hello.next().value)
console.log(hello.next().value)
console.log(hello.next().value)


