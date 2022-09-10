// Section 1.3.4
// page 68

// We saw in section 1.3.3 that attempting to compute square roots by naively finding a fixed
// point of x -> x/y does not converge, and that this can be fixed by average damping. The
// same method works for finding cube roots as fixed points of the average-damped y ->
// x/y^2. Unfortunately, the process does not work for fourth roots - a single average damp is
// not enough to make a fixed-point search for y -> x/y^3 converge. On the other hand, if we
// average-damp twice (i.e., use the average damp of the average damp of y -> x/y^3) the fixed-
// point search does converge. Do some experiments to determine how many average damps
// are required to compute nth roots as a fixed-point search based upon repeated average
// damping of y -> x/y^(n-1). Use this to implement a simple function for computing nth roots
// using 'fixed_point', 'average_damp', and the 'repeated' function of exericse 1.43. Assume
// that any arithmetic operations you need are available as primitives.

// from page 60
const tolerance = 0.00001;
function fixed_point(f, first_guess) {
    function close_enough(x, y) {
        return abs(x - y) < tolerance;
    }
    function try_with(guess) {
        const next = f(guess);
        return close_enough(guess, next)
            ? next
            : try_with(next);
    }
    return try_with(first_guess);
}

// from page 14
function abs(x) {
    return x >= 0 ? x : - x;
}

// from page 63
function average_damp(f) {
    return x => average(x, f(x));
}

// from page 19
function average(x, y) {
    return (x + y) / 2;
}

// from exercise 1.43
function compose(f, g) {
    return x => f(g(x));
}

function repeated(f, times) {
    return times === 1
        ? x => f(x)
        : repeated(compose(f, f), times - 1);
}

// from page 39
function fast_expt(b, n) {
    return n === 0
        ? 1
        : is_even(n)
        ? square(fast_expt(b, n / 2))
        : b * fast_expt(b, n - 1);
}

function is_even(n) {
    return n % 2 === 0;
}

function square(x) {
    return x * x;
}
