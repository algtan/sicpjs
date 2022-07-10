// Section 1.2.6
// page 48

// Demonstrate that the Carmichael numbers listed in footnote 45 really do fool the Fermat
// test. That is, write a function that takes an integer 'n' and test whether 'a^n' is congruent to 'a
// modulo n' for every 'a < n', and try your function on the given Carmichael numbers.

// NOTE: 'a^n' congruent to 'a modulo n' means a^n % n === a % n
// Because a < n, then a % n === a

function carmichael_test(n) {
    return congruent_modulo_test(1, n);
}

function congruent_modulo_test(a, n) {
    return a === n
        ? true
        : expmod(a, n, n) % n === a
        ? congruent_modulo_test(a + 1, n)
        : false;
}

// NOTE: Tried math_pow originally, but once numbers got too high, it would
// return NaN.
function expmod(base, exp, m) {
    return exp === 0
           ? 1
           : is_even(exp)
           ? square(expmod(base, exp / 2, m)) % m
           : (base * expmod(base, exp - 1, m)) % m;
}

function is_even(n) {
    return n % 2 === 0;
}

function square(x) {
    return x * x;
}

// Carmichael Numbers: 561, 1105, 1729, 2465, 2821, and 6601
// carmichael_test(561); // true
// carmichael_test(1105); // true
// carmichael_test(1729); // true
// carmichael_test(2465); // true
// carmichael_test(2821); // true
// carmichael_test(6601); // true
