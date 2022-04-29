// Section 1.2.4
// page 40

// Using the results of exercises 1.16 and 1.17, devise a function that generates an iterative
// process for multiplying two integers in terms of adding, doubling, and halving and uses a
// logarithmic number of steps.

function double(x) {
    return x + x;
}

function halve(x) {
    return x / 2;
}

function is_even(x) {
    return x % 2 === 0;
}

function fast_times(a, b) {
    return fast_times_iter(a, b, 0);
}

function fast_times_iter(a, b, acc) {
    return b === 1
           ? acc + a
           : a === 0 || b === 0
           ? 0
           : is_even(b)
           ? fast_times_iter(double(a), halve(b), acc)
           : fast_times_iter(a, b - 1, acc + a);
}

fast_times(2, 100);