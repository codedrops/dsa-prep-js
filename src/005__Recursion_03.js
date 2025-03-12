// ==============================================================
// Accepts a string and returns a new string in reverse.

function reverse(str) {
    if (str.length <= 1)
        return str;
    return reverse(str.slice(1)) + str[0];
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

// ==============================================================
// Returns whether a string is palindrome or not
// Palindrome - reads same forward and backward.
function isPalindrome(str) {
    if (str.length === 1)
        return true;
    if (str.length === 2)
        return str[0] === str[1];
    if (str[0] === str.slice(-1))
        return isPalindrome(str.slice(1, -1))
    return false;
}

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

// ==============================================================
// Function that accepts an array and a callback.
// The function returns true if a single value in the 
// array returns true, when passed to the callback. 
// Otherwise returns false.
function someRecursive(array, callback) {
    if (array.length === 0)
        return false;
    if (callback(array[0]))
        return true;
    return someRecursive(array.slice(1), callback);
}

// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

// ==============================================================
// Function accepts an array of arrays and returns a new 
// array with all values flattened.
function flatten(oldArr) {
    var newArr = []
    for (var i = 0; i < oldArr.length; i++) {
        if (Array.isArray(oldArr[i])) {
            newArr = newArr.concat(flatten(oldArr[i]))
        } else {
            newArr.push(oldArr[i])
        }
    }
    return newArr;
}

// flatten([1, 2, 3, [4, 5] ])          // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]])     // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]])               // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

// ==============================================================
