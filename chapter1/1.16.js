// Section 1.2.4
// page 40

// Design a function that evolves an iterative exponentiation process that uses successive
// squaring and uses a logarithmic number of steps, as does 'fast_exp'. (Hint: Using the
// observation that (b^(n/2))^2 = (b^2)^(n/2), keep, along with the exponent 'n' and the
// base 'b', an additional state variable 'a', and define the state transformation in such
// a way that the product 'ab^n' is unchaged from state to state. At the beginning of the
// process 'a' is taken to be 1, and the answer is given by the value of 'a' at the end
// of the process. In general, the technique of defining an 'invariant quantity' that
// remains unchanged from state to state is a powerful way to think about the design of
// iterative algorithms.)

function fast_exp_recursive(b, n) {
    return n === 0
           ? 1
           : is_even(n)
           ? square(fast_exp_recursive(b, n / 2))
           : b * fast_exp_recursive(b, n - 1);
}

function square(x) {
    return x * x;
}

function is_even(n) {
    return n % 2 === 0;
}


function fast_exp_iter(a, b, n) {
    return n === 0
           ? a
           : is_even(n)
           ? fast_exp_iter(a, b * b, n / 2)
           : fast_exp_iter(a * b, b, n - 1);
}

function fast_exp(b, n) {
    return fast_exp_iter(1, b, n);
}

fast_exp(2, 4);
fast_exp(2, 3);
