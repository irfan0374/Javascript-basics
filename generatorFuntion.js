
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



// function * calle(limit){
// let count =1
// while(count<=limit){
//     yield count 
//     count++
// }
// }
// let count=calle(5)
// console.log(count.next().value)
// console.log(count.next().value)
// console.log(count.next().value)
// console.log(count.next().value)


// find the even number using generator function

function *generator(limit){
    let count=1
    while(count<=limit){
        if(count%2==0){

            yield count
        }
        count++
    }
}
const generators= generator(10)
console.log(generators.next().value)
console.log(generators.next().value)
console.log(generators.next().value)
console.log(generators.next().value)
console.log(generators.next().value)

