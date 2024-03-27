// const obj={
//     name:"irfan",
//     age:33,
//     position:"developer"
// }

// Object.values(obj).forEach((item)=>{
//     console.log(item)
// })

const arr = [1, 2, 3, 4, 5, 6];
let result = arr.forEach((item,i) => {
     arr[i]=item * 2;
});
console.log(arr);


const obj={
    name:"irfan",
    age:33
}
let ans=Object.keys(obj).forEach((item)=>{
    console.log(`${item}:${obj[item]}`)
})
console.log(obj)
