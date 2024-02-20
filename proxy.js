
// let person={
//     name:"irfan",
//     age:22
// }
// let handler={
//     get:function(key ,value){
//         return key[value]
//     },
//     set:function(key ,value,newValue){
      
//             key[value]=newValue
        
//     }
// }
// let proxy=new Proxy(person,handler)
// proxy.name="iqbal"
// console.log(proxy.name)


const person={
    name:"irfan",
    age:23
}

const handler={
    get:function(key,value){
        return key[value]
    },
    set:function(key,value,setNewValue){
        key[value]=setNewValue
    }
}

let proxy=new Proxy(person,handler)
proxy.name="amaan"
console.log(proxy.name)



