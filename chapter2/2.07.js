// Section 2.1.4
// page 82

// Exercise 2.7

// Alyssa's program is incomplete because she has not specified the
// implementation of the interval abstraction. Here is a definition of the
// interval constructor:

function make_interval(x, y) {
    return pair(x, y);
}

// Define selectors 'upper_bound' and 'lower_bound' to complete the
// implementation.

function upper_bound(i) {
    return tail(i);
}

function lower_bound(i) {
    return head(i);
}
