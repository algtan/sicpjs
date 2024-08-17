// Section 2.1.3
// page 80

// Here is an alternative functional representation of pairs. For this
// representation, verify that 'head(pair(x, y))' yields x for any objects
// 'x' and 'y.'

function pair(x, y) {
    return m => m(x, y);
}

function head(z) {
    return z((p, q) => p);
}

// What is the corresponding definition of tail? (Hint: To verify that
// this works, make use of the substitution model of section 1.1.5.) 

function tail(z) {
    return z((p, q) => q);
}

// tail(pair(x, y));

// substitute 'pair(x, y)' with 'm => m(x, y)'
// tail(m => m(x, y))

// substitute 'z' with 'm => m(x, y)'
// (m => m(x, y))((p, q) => q)

// substitute 'm' with '(p, q) => q'
// ((p, q) => q)(x, y)

// substitute 'p' with 'x', and 'q' with 'y'
// (x, y) => y

// result
// y
