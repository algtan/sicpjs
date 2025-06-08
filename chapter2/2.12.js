// Section 2.1.4
// page 83

// Exercise 2.12

// Define a constructor 'make_center_percent' that takes a center and a
// percentage tolerance and produces the desired interval. You must also
// define a selector 'percent' that produces the percentage tolerance for a
// given interval. The 'center' selector is the same as the one shown above.

// from p. 83
function make_center_width(c, w) {
    return make_interval(c - w, c + w);
}

function center(i) {
    return (lower_bound(i) + upper_bound(i)) / 2;
}

function width(i) {
    return (upper_bound(i) - lower_bound(i)) / 2;
}

// from Exercise 2.7:
function make_interval(x, y) {
    return pair(x, y);
}

function upper_bound(i) {
    return tail(i);
}

function lower_bound(i) {
    return head(i);
}
