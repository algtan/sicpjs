// Section 1.3.4
// page 68

// Several of the numerical methods described in this chapter are instances of an extremely
// general computational strategy known as 'iterative improvement'. Iterative improvement
// says that, to compute something, we start with an initial guess for the answer, test if the
// guess is good enough, and otherwise improve the guess and continue the process using
// the improved guess as the new guess. Write a function 'iterative_improve' that takes
// two functions as arguments: a method for telling whether a guess is good enough and
// a method for improving a guess. The function 'iterative_improve' should return as its
// value a function that takes a guess as argument and keeps improving the guess until it is
// good enough. Rewrite the 'sqrt' function of section 1.1.7 and the 'fixed_point' function of
// section 1.3.3 in terms of 'iterative_improve'.

// from page 19
function improve(guess, x) {
    return average(guess, x / guess);
}

function average(x, y) {
    return (x + y) / 2;
}

// from page 20
function is_good_enough(guess, x) {
    return abs(square(guess) - x) < 0.001;
}

// from page 14
function abs(x) {
    return x >= 0 ? x : -x;
}

function square(x) {
    return x * x;
}
