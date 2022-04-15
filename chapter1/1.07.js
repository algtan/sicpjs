// Section 1.1.7
// page 21

// The 'is_good_enough' test used in computing square roots will not be very effective for
// finding the square roots of very small numbers. Also, in real computers, arithmatic
// operations are almost always performed with limited precision. This makes our test
// inadequate for very large numbers. Explain these statements, with examples showing how
// the test fails for small and large numbers. An alternative strategy for implementing
// 'is_good_enough' is to watch how 'guess' changes from one iteration to the next and to
// stop when the change is a very small fraction of the guess. Design a square-root
// function that uses this kind of end test. Does this work better for small and large
// numbers?

function sqrt_iter_prev(guess, x) {
    return is_good_enough_prev(guess, x)
           ? guess
           : sqrt_iter_prev(improve(guess, x), x);
}

function improve(guess, x) {
    return average(guess, x / guess);
}

function average(x, y) {
    return (x + y) / 2;
}

function is_good_enough_prev(guess, x) {
    return math_abs(square(guess) - x) < 0.001;
}

function square(x) {
    return math_pow(x, 2);
}

function sqrt_prev(x) {
    return sqrt_iter_prev(1, x);
}

// Examples
sqrt_prev(0.0001);
// sqrt_prev(123456789987654321);

// The 'is_good_enough' test will not work for small numbers because a resolution of
// 0.001 is not enough. An example is finding the square root of 0.0001, where the
// answer is actually 0.01, but the sqrt function as is will return approx. 0.032.

// The 'is_good_enough' test will also not work for large numbers because of rounding
// errors. An example is finding the square root of 123456789987654321, which is
// approx. 351364184.27. The program will get close and find 351364184.26990294
// after almost 1000 steps, but that evaluates to 123456789987654300, which is close
// enough RELATIVE to the number x, but not within 0.001 tolerance.

// In order to keep it to one 'guess' argument, the 'sqrt_iter' function will
// never check the original guess, but the guess after it. This is because
// we need to find the relative error between guesses, and there is no previous
// guess to compare to for the first guess.
function sqrt_iter(guess, x) {
    return is_next_guess_good_enough(guess, x)  // check if following guess is good enough
           ? improve(guess, x)                  // value of the next guess
           : sqrt_iter(improve(guess, x), x);   // recursively call sqrt_iter to start following guess
}

function is_next_guess_good_enough(guess, x) {
    return relative_error(guess, improve(guess, x)) < 0.001;
}

function relative_error(guess, nextGuess) {
    return math_abs(guess - nextGuess) / nextGuess;
}

function sqrt(x) {
    return sqrt_iter(1, x);
}

sqrt(0.0001);
sqrt(123456789987654321);
