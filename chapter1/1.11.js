// Section 1.2.2
// page 36

// A function 'f' is defined by the rules 'f(n) = n' if  'n < 3' and  'f(n) = f(n-1) + 2*f(n-2) + 3*f(n-3)'
// if 'n >= 3'. Write a JavaScript function thate computes 'f' by means of a recursive process. Write
// a function that computers 'f' by means of an iterative process.

// Recursive

function recursive_f(n) {
    return n < 3
           ? n
           : recursive_f(n-1) + 2*recursive_f(n-2) + 3*recursive_f(n-3);
}

recursive_f(3); // 4
recursive_f(4); // 11


// Iterative

function iterative_f(n) {
    return n < 3
           ? n
           : iterative_helper(2, 1, 0, n);
}

// At the beginning, the parameters represent
// a = f(i-1)
// b = f(i-2)
// c = f(i-3)
// where 2 < i <= n
function iterative_helper(a, b, c, count) {
    return count - 2 === 0
           ? a
           : iterative_helper(a + 2*b + 3*c, a, b, count - 1);
           // When we call iterative_helper in line 35
           // a = f(i)
           // b = f(i-1)
           // c = f(i-2)
           // where 2 < i <= n
}

iterative_f(3);
iterative_f(4);