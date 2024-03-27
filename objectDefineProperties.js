
// allow to define the multiple properties on object and modify the existing properties and with abilty to specify the attributes on each property


const obj={
    id:11,
    name:"irfan",
    age:32
} 

// i want to freeze the one property ( id)
Object.defineProperties(obj,{id:{writable:false}})
obj.id=12;
console.log(obj)

// i want to add the property and specify the attributes

Object.defineProperties(obj,{place:{
    value:"kannur",
    writable:true
}})


console.log(obj.place)