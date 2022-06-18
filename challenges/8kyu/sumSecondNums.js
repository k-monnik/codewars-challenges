//Create a function that takes in an array of numbers and alert the sum of the second lowest and the second highest numbers.

function sumSecondLowAndHigh(arr) {
    let sorted = arr.sort((a, b) => a - b)
    let sum = arr[1] + arr[arr.length - 2]
    alert(sum)
}

console.log(sumSecondLowAndHigh([92, 46, 17, 39, 2, 999, 81, 102]))
