// ==============================================================
// QUICK SORT
// ==============================================================
// TimeComplexity 
// BEST & AVERAGE = O(n log n)
// WORST = O(n^2)

// SpaceComplexity = O(log n)
// ==============================================================
// Pivot helper function
// Pivot index is incremented until an element
// all the smaller is founded and atlast 
// pivot-element is moved to pivot-index.

function pivot(arr, start=0, end=arr.length + 1) {
    let pivot = arr[start];
    let swapIdx = start;
    const swap = (arr,idx1,idx2)=>([arr[idx1],arr[idx2]] = [arr[idx2], arr[idx1]]);

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

function quickSort(arr, left=0, right=arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        // LEFT
        quickSort(arr, left, pivotIndex - 1);
        // RIGHT
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}
// ==============================================================
quickSort([10, 5, 6, 3, 7, 2, 8, -3, 100])
