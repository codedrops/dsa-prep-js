// ==============================================================
// POWER

function power(base, exponent) {
    if (exponent === 0)
        return 1;
    return base * power(base, exponent - 1);
}

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

// 2^4 = 2 * 2 * 2 * 2

// ==============================================================
// FACTORIAL
// 4! = 4*3*2*1 = 24
// 0! = 1

function factorial(x) {
    if (x < 0)
        return 0;
    if (x <= 1)
        return 1;
    return x * factorial(x - 1);
}

// factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

// ==============================================================
// PRODUCT OF ARRAY
// Takes an array of numbers and returns the product of them all.

function productOfArray(arr) {
    if (arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

// ==============================================================
// RECURSIVE RANGE
// Accepts a number and adds up all the numbers from 0 
// to the number passed to the function.

function recursiveRange(x) {
    if (x === 0)
        return 0;
    return x + recursiveRange(x - 1);
}

// recursiveRange(6) // 21
// recursiveRange(10) // 55 

// ==============================================================
// FIBONACCI 
// The Fibonacci series is the sequence of whole numbers 
// 1, 1, 2, 3, 5, 8, ... 
// which starts with 1 and 1, and where every number thereafter
// is equal to the sum of the previous two numbers.

function finonacci(n) {
    if (n <= 2)
        return 1;
    return finonacci(n - 1) + finonacci(n - 2);
}

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
// ==============================================================
