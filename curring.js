

// curring is transform a function that take multiple argument as a functin into series of function each handle one argument at a time


function a(x) {
    return function (b) {
        return function (c) {
            return x + b + c
        }
    }
}
let curring = a(3)(4)(5)


// partial application 

// partialy apply  function fixing few argument and create new function with fewer arguments

function app(x,y,z){
    return x+y+z
}
const partialApplication =app.bind(null,2)


// console.log(partialApplication(3,4))