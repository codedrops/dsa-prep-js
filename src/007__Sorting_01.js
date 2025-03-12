// ==============================================================
// Telling JS how to sort

["Steele","Colt","Data Structure", "Algorithms"].sort();

// ["Algorithms", "Colt", "Data Structure", "Steele"]
// ==============================================================

[6,4,15,10].sort();

// [10, 15, 4, 6]   === NOT SORTED = WRONG
// Because the default sort is according to string
// Unicode code points.
// ==============================================================
// So new sysntax is arr.sort([compareFunction]);

// The built in sort method accepts an optional
// comparator function.

// The comparator looks at pairs of elements (a and b),
// determines their sor order based on the return value.

// If the function returns -ve number, a should come before b
// If it returns +ve number, a should come after b
// If it returns 0, a and b are same as far as the sort is concerned.


function numberCompare(n1,n2){
    return n1-n2;
}

[6,4,15,10].sort(numberCompare);
// ==============================================================
// [4, 6, 10, 15]

function compareByLength(str1,str2){
    return str1.length-str2.length;
}

["Steele","Colt","Data Structure", "Algorithms"].sort(compareByLength);

// ["Colt", "Steele", "Algorithms", "Data Structure"]

// ==============================================================