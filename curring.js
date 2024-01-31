

// curring is transform a function that take multiple argument as a functin into series of function each handle one argument at a time


function a(x) {
    return function (b) {
        return function (c) {
            return x + b + c
        }
    }
}
let curring = a(3)(4)(5)

console.log(curring)
