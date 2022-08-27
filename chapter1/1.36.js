// Section 1.3.3
// page 62

// Modify 'fixed_point' so that it prints the sequence of approximations it generates using
// the primitive function 'display' shown in exercise 1.22. Then find a solution to x^x = 1000
// by finding a fixed point of x -> log(1000)/log(x). (Use the primitive function 'math_log',
// which computes natural logarithms.) Compare the number of steps this takes with and
// without average damping. (Note that you cannot start 'fixed_point' with a guess of 1, as
// this would cause division by log(1) = 0.)

// From page 60
const tolerance = 0.00001;
function fixed_point(f, first_guess) {
    function close_enough(x, y) {
        return abs(x - y) < tolerance;
    }
    function try_with(guess) {
        const next = f(guess);
        display(next);  // Added 'display'
        return close_enough(guess, next)
               ? next
               : try_with(next);
    }
    return try_with(first_guess);
}

// From page 14
function abs(x) {
    return x > 0
        ? x
        : x === 0
        ? 0
        : - x;
}
