// Section 1.3.3
// page 63

// A continued fraction representation of the tangent function was published in 1770 by the
// German mathematician J.H. Lambert:

// tan x = x / (1 - x^2 / (3 - (x^2 / (5 - (x^2 / ...)))))

// where 'x' is in radians. Declare a function 'tan_cf(x, k)' that computes an approximation
// to the tangent function based on Lambert's formula. As in exercise 1.37, 'k' specifies the
// number of terms to compute.

function cont_frac(n, d, k) {
    function denominator(i) {
        return i === k
            ? d(k)
            : d(i) + n(i + 1) / denominator(i + 1);
    }
    return n(1) / denominator(1);
}
