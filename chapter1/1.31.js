// Section 1.3.1
// page 52

// Part a

// The 'sum' function is only the simplest of a vast number of similar abstractions that can
// be captured as higher-order functions. Write an analogous function called 'product'
// that returns the product of the values of a function at points over a given range.
// Show how to define 'factorial' in terms of 'product'. Also use 'product' to compute
// approximations to pi using the formula

// pi / 4 = (2 * 4 * 4 * 6 * 8 ...) / (3 * 3 * 5 * 5 * 7 * 7 ...)

function product_recursive(term, a, next, b) {
    return a > b
        ? 1
        : term(a) * product_recursive(term, next(a), next, b);
}

function factorial(n) {
    function factorial_term(n) {
        return n;
    }
    function inc(n) {
        return n + 1;
    }
    return product_recursive(factorial_term, 1, inc, n);
}

// factorial(5);

// Wallis product: https://en.wikipedia.org/wiki/Wallis_product
function wallis_pi_approx(steps) {
    function wallis_term(n) {
        return (4 * n * n) / (4 * n * n - 1);
    }
    function inc(n) {
        return n + 1;
    }
    return 2 * product_recursive(wallis_term, 1, inc, steps);
}

wallis_pi_approx(1000);


// Part b

// If your 'product' function generates a recursive process, write one that generates an
// iterative process. If it generates an iterative process, write one that generates a recursive
// process.

function product_iterative(term, a, next, b) {
    function iter(a, result) {
        return a > b
            ? result
            : iter(next(a), term(a) * result);
    }
    return iter(a, 1);
}