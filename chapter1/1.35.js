// Section 1.3.3
// page 62

// Show that the golden ratio phi (section 1.2.2) is a fixed point of the transformation
// x -> 1 + 1/x, and use this face to compute phi by means of the 'fixed_point' function.

// From page 60
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

// From page 14
function abs(x) {
    return x > 0
        ? x
        : x === 0
        ? 0
        : - x;
}

fixed_point(x => 1 + (1 / x), 1);