// map
// map take a array and apply the funtion in each element with creating new Array

let score = [3, 4, 5, 6, 7, 8]


let result = score.map((res) => {
    if (res % 2 === 0) {
        return res * 2

    }

})


//    filter

// filter also return the new array only element satisfy given condition

let filterArray = score.filter((res) => {
    if (res % 2 == 0) {
        return res
    }
})


// reduce

// accumulate the value of the array into single value. apply function combine each element with an accumulator

let reduceValue = score.reduce((acc, curr) => {
    return acc + curr
},0)



// forEach

// iterate over the each element of an array and apply the new function to each element but doesnt create a new array

let ForEach = score.forEach((res) => {
    // console.log(res*2) 
})



// pratice

let result1 = score.filter((res) => res % 2 === 0).map((ans) => ans * 2)
console.log(result1)
