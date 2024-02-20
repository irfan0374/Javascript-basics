// object. seal 
// which means seal the object you cannot add or remove the properties . And the you can modify the exisiting properties

const obj ={
    name:"irfannn",
    school:"pjhsss"
}
console.log(Object.isSealed(obj))
obj.name="amaan"
console.log(obj)
Object.seal(obj)
console.log(Object.isSealed(obj))

// Object.freeze
// which is just like the object.seal but this method you cannnot modify the existing properties


const people=
{
    name:"asthaq",
    age:23
}

Object.freeze(people)
people.name="firas"  //it cannot change the property because of freeze
console.log(people)