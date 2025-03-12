// ==============================================================

function countDown(num) {
    if (num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    countDown(--num);
}

// ==============================================================

function sumRange(num) {
    if (num === 1)
        return 1;
    return num + sumRange(num - 1);
}

// ==============================================================

function factorial(num) {
    if (num === 1)
        return 1;
    return num * factorial(num - 1);
}

// ==============================================================

// Recursion using helper function
function collectOddValues(arr) {
    let result = [];
    function helper(input) {
        if (input.length === 0) {
            return
        }

        if (input[0] % 2 !== 0) {
            result.push(input[0]);
        }

        helper(input.slice(1));
    }
    helper(arr);
    return result;
}
// ==============================================================
// Pure recursion of previous example

// Pure Recursion Tips

// For arrays, use methods like slice, the spread operator,
// and concat that make copies of arrays so you don't mutate them.

// Remember that strings are immutable so you will
// need to use methods like slice, substr, or 
// substring to make copies of strings.

// To make copies of objects use Object.assign, or 
// the spread operator.

function collectOddValues(arr) {
    let newArr = [];
    if (arr.length === 0) {
        return newArr;
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));

    return newArr;
}
// ==============================================================
