// Section 2.1.2
// page 77

// Consider the problem of representing line segments in a plane. Each segment
// is represented as a pair of points: a starting point and an ending point.
// Declare a constructor 'make_segment' and selectors 'start_segment' and
// 'end_segment' that define the representation of segments in terms of points.
// Futhermore, a point can be represented as a pair of numbers: the 'x
// coordinate' and the 'y coordinate.' Accordingly, specify a constructor
// 'make_point' and selectors 'x_point' and 'y_point' that define this
// representation. Finally, using your selectors and constructors, declare a
// function 'midpoint_segment' that takes a line segment as argument and returns
// its midpoint (the point whose coordinate are the average of the coordinates 
// of the endpoints). To try your functions, you'll need a way to print points:

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

// Midpoint
function avg(a, b) {
    return (a + b) / 2;
}

function midpoint_segment(s) {
    const x = avg(x_point(start_segment(s)), x_point(end_segment(s)));
    const y = avg(y_point(start_segment(s)), y_point(end_segment(s)));
    
    return make_point(x, y);
}


// Test
const start = make_point(1, 1);
const end = make_point(3, 5);

const segment = make_segment(start, end);

const midpoint = midpoint_segment(segment);

print_point(midpoint); // Expect midpoint to be (2, 3)
