// Add Function
function add(x, y) {
    return x + y
}
    console.log("2 + 4 = " + add(2,4)) // Expected; 6


// Multiply Function
function multiply(x, y) {
    let answer = x
    for (var loop = 1; loop < y; loop++) {
        answer = answer + x
    }
    return answer
}
console.log("6 x 8 = " + multiply(6, 8)) // Expected; 48


// Power Function
function power(x, y) {
    let answer = 1
    for (var loop = 0; loop < y; loop++) {
        answer = answer * x
    }
    return answer
}
console.log("2 ^ 8 = " + power(2,8)) // Expected; 256


// Factorial Function
function factorial(x) {
    let answer = 1
    for (var loop = 1; loop <= x; loop++) {
        answer = answer * loop
    }
    return answer
}
console.log("4! is " + factorial(4)) // Expected; 24


// Fibonacci Function
function fibonacci(x) {
    if (x == 0) {
        return 0
    }
    if (x == 1) {
        return 1
    }
    else {
        return fibonacci(x-1) + fibonacci(x-2)
     }
}
console.log("The 10th Fibonacci is " + fibonacci(10)) // Expected; 55