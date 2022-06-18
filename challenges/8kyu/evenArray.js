// Create a function that takes in an array of nums, and return a new array containing every even number from the original array w/o using map or filter.

function evenArr(arr) {
    let even = []
    arr.forEach(num => {
        if (num % 2 === 0) {
            even.push(num)
        }
    })
    return even;

}

console.log(evenArr([4, 5, 6]));