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
// are perpendicular, and they share a similar point.

// Rectangles - 1st Implementation
function make_rectangle(s1, s2) {
    return pair(s1, s2);
}

function square(a) {
    return a * a;
}

function distance(s) {
    const p1 = head(s);
    const p2 = tail(s);
    
    const x1 = x_point(p1);
    const x2 = x_point(p2);
    
    const y1 = y_point(p1);
    const y2 = y_point(p2);
    
    return math_sqrt(square(x2 - x1) + square(y2 - y1));
}

function height(r) {
    return distance(head(r));
}

function width(r) {
    return distance(tail(r));
}

function perimeter(r) {
    return 2 * height(r) + 2 * width(r);
}

function area(r) {
    return height(r) * width(r);
}


// Test
const p1 = make_point(2, 0);
const p2 = make_point(0, 0);
const p3 = make_point(0, 3);

const s1 = make_segment(p1, p2);
const s2 = make_segment(p2, p3);

const rect = make_rectangle(s1, s2);

perimeter(rect); // 10
area(rect); // 6
