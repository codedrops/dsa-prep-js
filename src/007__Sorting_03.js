// Selection Sort
// TimeComplexity = O(n^2)
function selectionSort(arr) {
    const swap = (arr,idx1,idx2)=>([arr[idx1],arr[idx2]] = [arr[idx2], arr[idx1]]);
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[lowest] > arr[j]) {
                lowest = j;
            }
        }
        if (i !== lowest)
            swap(arr, i, lowest);
    }
    return arr;
}

selectionSort([7, 1, 3, 2, 6, 4, 5]);
