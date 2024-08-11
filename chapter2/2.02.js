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

