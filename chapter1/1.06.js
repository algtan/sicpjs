// Section 1.1.7
// page 20

// Alyssa P. Hacker doesn't like the syntax of conditional expressions, involving the
// characters '?' and ':'. "Why can't I just declare an ordinary conditoinal function
// whose application works just like conditional expressions?" she asks. Alyssa's friend
// Eva Lu Ator claims this can indeed be done, and she declares a 'conditional' function
// as follows:

function conditional(predicate, then_clause, else_clause) {
    return predicate ? then_clause : else_clause;
}

// Eva demonstrates the program for Alyssa:

conditional(2 === 3, 0, 5); // 5

conditional(1 === 1, 0, 5); // 0

// Delighted, Alyssa uses conditional to rewrite the square-root program:

function sqrt_iter(guess, x) {
    return conditional(is_good_enough(guess, x),
                       guess,
                       sqrt_iter(improve(guess, x),
                                 x));
}

function improve(guess, x) {
    return average(guess, x / guess);
}

function average(x, y) {
    return (x + y) / 2;
}

function is_good_enough(guess, x) {
    return math_abs(square(guess) - x) < 0.001;
}

function square(x) {
    return math_pow(x, 2);
}

// Example function call
sqrt_iter(1, 2);

// What happens when Alyssa attempts to use this to compute square roots? Explain.

// JavaScript uses applicative-order evaluation, which means that it will "evaluate
// the arguments and then apply" the arguments to the function call. So every call
// to 'sqrt_iter' will open a new call to 'sqrt_iter', which will lead to an
// infinite loop/stack overflow as 'conditional' is never performed.
