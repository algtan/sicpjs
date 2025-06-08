// Section 2.1.4
// page 82

// Exercise 2.10

// Ben Bitdiddle, an expert systems programmer, looks over Alyssa's shoulder
// and comments that it is not clear what it means to divide by an interval
// that spans zero. Modify Alyssa's program to check for this condition and to
// signal an error if it occurs.

// from pp. 81 - 82
function mul_interval(x, y) {
    const p1 = lower_bound(x) * lower_bound(y);
    const p2 = lower_bound(x) * upper_bound(y);
    const p3 = upper_bound(x) * lower_bound(y);
    const p4 = upper_bound(x) * upper_bound(y);
    return make_interval(math_min(p1, p2, p3, p4),
                         math_max(p1, p2, p3, p4));
}

// function div_interval(x, y) {
//    return mul_interval(x, make_interval(1 / upper_bound(y),
//                                         1 / lower_bound(y)));
//}

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


function div_interval(x, y) {
    return upper_bound(y) !== 0 && lower_bound(y) !== 0
        ? mul_interval(x, make_interval(1 / upper_bound(y),
                                        1 / lower_bound(y)))
        : error("Unable to divide by interval that spans zero");
}

const i1 = make_interval(2, 4);
const i2 = make_interval(8, 16);

div_interval(i2, i1); // [2, 8]

const i3 = make_interval(0, 1); // error
div_interval(i1, i3);

const i4 = make_interval(-1, 0);
div_interval(i1, i4); // error
