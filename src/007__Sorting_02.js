
function bubbleSort1(arr){
    console.time();
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length-1;j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.timeEnd();
    return arr;
}

//bubbleSort([7,1,3,2,6,4,5]);

// ==============================================================
// Bubble Sort - Optimized
// TimeComplexity = O(n^2)
function bubbleSort(arr) {
    console.time();
    var swapped;
    for (var i = arr.length; i > 0; i--) {
        swapped = false;
        for (var j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    console.timeEnd();
    return arr;
}

// bubbleSort([7,1,3,2,6,4,5]);
// ==============================================================


bubbleSort1([7,1,3,2,6,4,5]);


bubbleSort([7,1,3,2,6,4,5]);