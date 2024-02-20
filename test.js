// // find the secondlargest element in a array
// let arr=[3,4,5,6,7,8,9]

//  function secondlargest(arr){
//     let large=-Infinity;
//     let secondlarge=-Infinity
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>large){
//             secondlarge=large;
//             large=arr[i]
//         }else if(arr[i]>secondlarge&& arr[i]!=large){
//             secondlarge=arr[i]
//         }
//     }
//     return secondlarge
//  }
//  console.log(secondlargest(arr))

// sum of the element in a array
// let arr=[3,4,5,6,7,8]
// function sum(arr){
//     let sum=0
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i]
//     }
//     return sum
// }
// console.log(sum(arr))


// find the duplicate element in a array
// function duplicate(arr){
//     let duplicates=[]
//     for (let i=0;i<arr.length;i++){
        
//         let flag=0;
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]==arr[j]){
//                 flag++
//                 break;
//             }
//         }
//         if(flag==1 && !duplicates.includes(arr[i])){
//          duplicates.push(arr[i])
//         }

//     }
//     return duplicates
// }
// console.log(duplicate(arr))

// find the unique element in a array

// function unique(arr){
//     for(let i=0;i<arr.length;i++){
//         let flag=0
//         for(let j=0;j<arr.length;j++){
//             if(arr[i]==arr[j]&&i!=j){
//                 flag++
//                 break
//             }
//         }
//         if(flag==0){
//             console.log(arr[i])
//         }
//     }
// }
// console.log(unique(arr))



// let arr=[2,4,5,6,8,9]

// arr.splice(4,0,7)
// let copy=arr.slice(0,3)
// console.log(copy)


// // forEach
// let arr=[13,4,5,6,7]

// arr.forEach((ele)=>{
//     console.log(ele)
// })


// let arr=[13,4,5,6,7]
// let arr1=[10,11,12,1,2]

// function sort(){
//     for(let i=0;i<arr.length;i++){
//         for(let j)
//     }
// }
// console.log(sort) 




// let arr=[1,2,3,4,5,6,7,8]

// let square=arr.map((ele)=>{
//     return ele*ele
// })
// console.log(square[square.length-2])
// console.log(square)

// let str="hello world"

// function x(str){
//     let a =str.slice(0,6)
//     let b=str.slice(6)
//     let ho=[...b,...a]
//     return ho

// }
// console.log(x(str))


// let binery="00000000000100101101010000000100011111000000000"

// function largestZero(str){
//     let i=0
//     let large=0
//     let count=0
//     while(i<str.length){
//     if(str[i]==0){
//         count++
//       if(count>large){
//         large=count
     
//       }
//     }else{
//         count=0
//     }
//     i++;
//   }
//   return large
// }
// console.log(largestZero(binery))


// let arr=[3,4,5,6,7,8]

// function reverse(arr){
//  for(let i=0;i<arr.length/2;i++){
//     let temp=arr[i]
//     arr[i]=arr[arr.length-1-i]
//     arr[arr.length-1-i]=temp

//  }
//  return arr
// }
// console.log(reverse(arr))


// find the largest string 

// let str="Lorem Ipsum is simply dummy text of the printing and typesetting"

// function largestString(str){
//     const word = str.split(' ');
//  let largeword=""
//  let largewordlength=0
//  for(const words of word){
//     if(words.length>largewordlength){
//         largewordlength=words.length
//         largeword=words
//     }
//  }
//  return largeword
    
// }


// - return true when argument is a multiple of 3 and 5

// function chechTheMultiply(num){
//     if(num%3==0 &&num%5==0){
//         return true
//     }else{
//         return false
//     }

// }

// console.log(chechTheMultiply(15))


// let obj={
//     name:"irfan",
//     age:23,
//     place:"puthia",
//     getName:function(){
//         return `name:${this.name},place:${this.age}`
//     },
//     language:{
//         malayalam:"read",
//         tamil:"write",

//     }
// }
//  const {malayalam,tamil}=obj.language
//  console.log(malayalam)


// 



// console.log(obj)

// let obje={}

// let x=Object.keys(obje).length

// console.log(x)


// switchCase

// switch(3%2){
//     case 0:
//         return true;
//         break;
//     case 1:
//         return false;
//         break;
// }

// - remove elements that start with a vowel


// let arr=["apple","orange","iceCream","banana"]

// function remove(arr){
//     let vowels=['a','e','i','o','u'];

//     for(let i=0;i<arr.length;i++){
//         if(vowels.includes(arr[i][0])){
//             arr.splice(i,1)
//             i--;
//         }
      
//     }
//     return arr
    
// }
// console.log(remove(arr))



// let obj={
//     name:"irfan",
//     eima:"placee",
//     helo:"arr"
// }
// let vowels=['a','e','i','o','u'];
// for(let x in obj){
//     if(vowels.includes(x[0])){
//         delete obj[x]
//     }
// }
// console.log(obj)



// find the total charecters in an array

// let arr = ["apple", "orange", "banana", "kiwi"];


// let char=arr.reduce((acc,curr)=>{
     
//     acc+=curr.length
//     return acc
// },0)

// console.log(char)

// extract the number in string

// let inputString = "abc123xyz456";

// function extract(inputString){
//     let digits=""
//     for(let i=0;i<inputString.length;i++){
//         if(inputString[i]>="0"&& inputString[i]<="9"){
//             digits+=inputString[i]
//         }
//     }
//     return digits
// }
// console.log(extract(inputString))


// largest element in an array using reduce

// let arr=[2,3,4,4,5,6,7,8]

// let largest=arr.reduce((acc,curr)=>{
//     if(curr>acc){
//         acc=curr
//     }
//     return acc
// },0)
// console.log(largest)

// let arr=[1,2,3,4,5,6]

// for(let i=n;i<arr.length-1;i++){

// }


// for(var i=0;i<10;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },0)
// }


