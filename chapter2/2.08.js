// Section 2.1.4
// page 82

// Exercise 2.8

// Using reasoning analogous to Alyssa's, describe how the difference of two
// intervals may be computed. Define a corresponding subraction function, called
// 'sub_interval'.

// The difference between two intervals itself is an interval. To find the
// smallest value of this interval, you need to take the smallest value of
// interval 1, and subtract the largest value of interval 2 from it. To find the
// largest value of this interval, you need to take the largest value of
// interval 1, and subtract the smallest value of interval 2 from it.

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


function sub_interval(x, y) {
    return make_interval(lower_bound(x) - upper_bound(y),
                         upper_bound(x) - lower_bound(y));
}
