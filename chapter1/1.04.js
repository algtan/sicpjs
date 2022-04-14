// Section 1.1.6
// page 17

// Observe that our model of evalution allows for applications whose function expressions
// are compound expressions. Use this observation to describe the behavior of 'a_plus_abs_b':

function plus(a, b) { return a + b; }

function minus(a, b) { return a - b; }

function a_plus_abs_b(a, b) {
    return (b >= 0 ? plus : minus)(a, b);
}

// When 'a_plus_abs_b' is called, it will first evaluate the arguments of 'a_plus_abs_b'.
// It will then check the predicate 'b >= 0'. If it is true, it will use the function 'plus',
// otherwise, if it is false, it will use the function 'minus'.
// Finally, 'plus' or 'minus' will be evaluated using the arguments 'a' and 'b'.