// Section 1.3.4
// page 67

// Declare a function 'cubic' that can be used together with the 'newtons_method' function in
// expressions of the form

// 'newtons_method(cubic(a, b, c), 1)'

// to approximate zeroes of the cubic x^3 + a*x^2 + b*x + c.

function abs(x) {
    return x >= 0 ? x : - x;
}

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

const dx = 0.00001;

function deriv(g) {
    return x => (g(x + dx) - g(x)) / dx;
}

function newton_transform(g) {
    return x => x - g(x) / deriv(g)(x);
}

function newtons_method(g, guess) {
    return fixed_point(newton_transform(g), guess);
}

function cubic(a, b, c) {
    return x => x * x * x + a * x * x + b * x + c;
}

newtons_method(cubic(1, -1, -1), 0); // roots are x = 1 and x = -1