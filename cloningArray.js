// cloning array
// when you want to create the copy of the existing array without modify the original array

// create the shallow copy of the array

// slice
const ogArray=[2,3,4,5,6,7]
const sliceArray=ogArray.slice()


// spread
const spreadArray=[...ogArray]

// arrayFrom
const ArrayFrom=Array.from(ogArray)
console.log(ArrayFrom)
