// Section 1.1.6
// page 17

// Declare a function that takes three numbers as arguments and returns the sum of the squares
// of the two larger numbers.

function square(x) {
    return x * x;
}

function f(x, y, z) {
    return square(x) + square(y) + square(z) - 
    // subtract the square of the smallest
    square(x > y ? (y > z ? z : y) : (x > z ? z : x));
}