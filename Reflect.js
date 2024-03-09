let obj={
    name:"irfan",
    age:33
}

console.log(Reflect.get(obj,"name"))  //retrive the value of the obj
Reflect.set(obj,"place","puthiyangadi")  //set value or modify the value
console.log(obj)
console.log(Reflect.has(obj,"place"))  //it return the boolean values
