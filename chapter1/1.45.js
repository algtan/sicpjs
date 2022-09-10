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

function nth_root(n, x) {
    return fixed_point(
                repeated(average_damp, math_floor(math_log2(n)))(y => x / fast_expt(y, n - 1)),
                1);
}

nth_root(2, 4); // 1 average_damp
nth_root(3, 8); // 1 average_damp
nth_root(4, 16); // 2 average_damps
nth_root(5, 32); // 2 average_damps
nth_root(6, 64); // 2 average_damps
nth_root(7, 128); // 2 average_damps
nth_root(8, 256); // 3 average_damps
nth_root(9, 512); // 3 average_damps
nth_root(10, 1024); // 3 average_damps
nth_root(11, 2048); // 3 average_damps
nth_root(12, 4096); // 3 average_damps
nth_root(13, 8192); // 3 average_damps
nth_root(14, 16384); // 3 average_damps
nth_root(15, 32768); // 3 average_damps
nth_root(16, 65536); // 3 average_damps
nth_root(20, 1048576); // 3 average_damps

// For the most part, it looks like the number of average_damps needed grows at a logarithmic scale
// (1 average_damps for 2th and 3rd roots, 2 average_damps for 4th, 5th, 6th, and 7th roots,
// 3 average_damps for 8th, 9th, 10th, 11th, 12th, 13th, 14th, and 15th roots, etc.)
