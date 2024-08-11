// Section 2.1.2
// page 78

// Implement a representation for triangles in a plane. (Hint. You may want to
// make use of exercise 2.2.) In terms of your constructors and selectors,
// create functions that compute the perimeter and the area of a given
// rectangle. Now implement a different representation for rectangles. Can you
// design your system with suitable abstraction barriers, so that the same
// perimeter and area functions will work using either representations?

function print_point(p) {
    return display("(" + stringify(x_point(p)) + ", "
                       + stringify(y_point(p)) + ")");
}

// Points
function make_point(x, y) {
    return pair(x, y);
}

function x_point(p) {
    return head(p);
}

function y_point(p) {
    return tail(p);
}

// Line Segments
function make_segment(p1, p2) {
    return pair(p1, p2);
}

function start_segment(s) {
    return head(s);
}

function end_segment(s) {
    return tail(s);
}

// We are going to proceed under the assumption that the line segments created
// are perpendicular.
