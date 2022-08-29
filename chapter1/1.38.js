// Section 1.3.3
// page 62

// In 1737, the Swiss mathematician Leonhard Euler published a memoir 'De Fractionibus
// Continuis,' which included a continued fraction expansion for e-2, where e is the base
// of the natural logarithms. In this fraction, the 'N_i' are all 1, and the 'D_i' are successively
// 1, 2, 1, 1, 4, 1, 1, 6, 1, 1, 8, ... . Write a program that uses your 'cont_frac' function from
// exercise 1.37 to approximate e, based on Euler's expansion.

function cont_frac(n, d, k) {
    function denominator(i) {
        return i === k
            ? d(k)
            : d(i) + n(i + 1) / denominator(i + 1);
    }
    return n(1) / denominator(1);
}
