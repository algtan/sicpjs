// Section 1.3.1
// page 52

// Simpson's Rule is a more accurate method of numerical integration than the method
// illustrated above. Using Simpson's Rule, the integral of a function 'f' between 'a' and 'b' is
// approximated as

// h/3 * [y_0 + 4*y_1 2*y_2 + 4*y_3 + 2*y_4 + ... + 2*y_(n-2) + 4*y_(n-1) + y_n]

// where 'h=(b-a)/n', for some even integer 'n', and 'y_k=f(a+k*h)'. (Increasing 'n' increases the
// accuracy of the approximation.) Declare a function that takes as arguments 'f', 'a', 'b', and 'n'
// and returns the value of the integral, computed using Simpson's Rule. Use your function
// to integrate cube betweeen 0 and 1 (with n=100 and n=1000), and compare the results to
// those of the 'integral' function shown above.

function sum(term, a, next, b) {
    return a > b
        ? 0
        : term(a) + sum(term, next(a), next, b);
}

function inc(n) {
    return n + 1;
}

function simpson_rule(f, a, b, n) {
    const h = (b - a) / n;
    
    function y(k) {
        return f(a + k * h);
    }
    
    function multiplier(k) {
        return k === 0 || k === n
            ? 1
            : k % 2 === 0
            ? 2
            : 4;
    }
    
    function simpson_rule_term(k) {
        return multiplier(k) * y(k);
    }
    
    return h / 3 * sum(simpson_rule_term, a, inc, n);
}

function cube(x) {
    return x * x * x;
}

simpson_rule(cube, 0, 1, 100);
simpson_rule(cube, 0, 1, 1000);
