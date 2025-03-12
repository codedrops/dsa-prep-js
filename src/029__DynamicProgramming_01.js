// Overlapping sub-problems
// Optimal Substructure

// ==============================================================
// A Naive recursive solution of fibonacci series.
// TimeComplexity = O(2^n) = VERY-VERY-BAD
function fib(n) {
    if (n <= 2)
        return 1;
    return fib(n - 1) + fib(n - 2);
}

// PROBLEM: Duplication of task
// SOLUTION = MEMOIZATION (Storing in memory)
// ==============================================================

// A TOP-DOWN APPROACH
// A MEMO-IZED SOLUTION
// TimeComplexity = O(n)
function fib(n, memo=[undefined, 1, 1]) {
    if (memo[n] !== undefined)
        return memo[n];
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}

// PROBLEM: Maximum call-stack exceeded = SpaceComplexity-HIGH.
// SOLUTION: TABULATION
// ==============================================================

// A BOTTOM-UP APPROACH
// Using TABULATION
// TimeComplexity = O(n)
// SpaceComplexity LESS.
function fib_tabulation(n) {
    if (n <= 2)
        return 1;
    var fibNums = [0, 1, 1];
    for (var i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    return fibNums[n];
}
// ==============================================================
