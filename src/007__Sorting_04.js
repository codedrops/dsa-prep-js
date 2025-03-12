// ==============================================================
// Insertion Sort
// TimeComplexity O(n^2)
function insertionSort(arr) {
    var currentVal;
    for (var i = 1; i < arr.length; i++) {
        currentVal = arr[i];
        for (var j = i - 1; (j >= 0) && (arr[j] > currentVal); j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

insertionSort([2, 1, 9, 76, 4]);
// ==============================================================

// https://www.toptal.com/developers/sorting-algorithms

// With nearly sorted data Bubble and Insertion Sort works well.

// TimeComplexity of 
// Bubble Sort,
// Insertion Sort,
// Selection Sort
// is O(n^2)

// SpaceComplexity of all is O(1)
// ==============================================================
