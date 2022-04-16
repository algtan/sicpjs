// Section 1.1.7
// page 21

// Newton's method for cube roots is based on the fact that if 'y' is an approximation to the
// cube root of 'x', then a better approximation is given by the value

// ((x/y^2) + 2*y) / 3

// Use this formula to implement a cube-root function analogous to the square-root function.
// (In section 1.3.4 we will see how to implement Newton's method in general as an
// abstraction of these square-root and cube-root functions.)

function cbrt_iter(guess, x) {
    return is_next_guess_good_enough(guess, x)  // check if following guess is good enough
           ? improve(guess, x)                  // value of the next guess
           : cbrt_iter(improve(guess, x), x);   // recursively call cbrt_iter to start following guess
}

function improve(guess, x) {
    // guess = y in formula
    return ((x / math_pow(guess, 2)) + 2 * guess) / 3;
}

function is_next_guess_good_enough(guess, x) {
    return relative_error(guess, improve(guess, x)) < 0.001;
}

function relative_error(guess, nextGuess) {
    return math_abs(guess - nextGuess) / nextGuess;
}

function cbrt(x) {
    return cbrt_iter(1, x);
}

cbrt(27);
cbrt(28);
