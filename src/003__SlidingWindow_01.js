// ==============================================================
// This pattern involves creating a 
// window which can either be an array or
// number from one position to another.

// Depending on a certain condition, the
// window either increases or closes (and a
// new window is created)

// Very useful for keeping track of a subset of
// data in an array/string etc.
// ==============================================================
// Write a function called maxSubarraySum which accepts
// an array of integers and a number called n. The function
// should calculate the maximum sum of n consecutive
// elements in the array.

// ==============================================================
// NAIVE APPROACH
// Complexity - O(n^2)
function maxSubArraySum(arr, num) {
    if (num > arr.length) {
        return null;
    }
    var max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) {
        temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}
// ==============================================================
// SLIDING WINDOW APPROACH 
// Complexity - O(n)
function maxSubArraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num)
        return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
// ==============================================================
// maxSubArraySum([1,2,5,2,8,1,5],2); // 10
// maxSubArraySum([1,2,5,2,8,1,5],4); // 17
// maxSubArraySum([4,2,1,6],1); // 6
// maxSubArraySum([4,2,1,6,2],4); // 13
// maxSubArraySum([],2); // null
// ==============================================================
