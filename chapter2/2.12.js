// Section 2.1.4
// page 83

// Exercise 2.12

// Define a constructor 'make_center_percent' that takes a center and a
// percentage tolerance and produces the desired interval. You must also
// define a selector 'percent' that produces the percentage tolerance for a
// given interval. The 'center' selector is the same as the one shown above.

// from p. 83
// Creates an interval using a center and a width
function make_center_width(c, w) {
    return make_interval(c - w, c + w);
}

// Returns the center value for an interval
function center(i) {
    return (lower_bound(i) + upper_bound(i)) / 2;
}

// Returns the width value for an interval
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

// Need to create a function similar to 'make_center_width' that creates an
// interval using a center and a percent. Also need to create a function
// 'percent' similar to 'width' that returns the percent from an interval

function make_center_percent(c, p) {
    const width = c * (p / 100);
    return make_center_width(c, width);
}

function percent(i) {
    const c = center(i);
    const w = width(i);
    return (w / c) * 100;
}

const i = make_center_percent(10, 10);
upper_bound(i); // 11
lower_bound(i); // 9
percent(i); // 10