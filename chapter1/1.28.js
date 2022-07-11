// Section 1.2.6
// page 48

// One variant of the Fermat test that cannot be fooled is called the 'Miller-Rabin test' (Miller
// 1976; Rabin 1980). This starts from an alternate form of Fermat's Little Theorem, which
// states that if 'n' is a prime number and 'a' is any positive integer less than 'n', then 'a raised
// to the (n-1)st power' is congruent to '1 modulo n'. To test the primality of a number 'n' by
// the Millter-Rabin test, we pick a random number 'a < n' and raise 'a to the (n-1)st power
// modulo n' using the 'expmod' function. However, whenever we perform the squaring step in
// 'expmod', we check to see if we have discovered a "nontrivial square root of 1 modulo n,"
// that is, a number not equal to 1 or n - 1 whose square is equal to 1 modulo n. It is possible to
// prove that if such a nontrivial square root of 1 exists, then 'n' is not prime. It is also possible
// to prove that if 'n' is an odd number that is not prime, then for at least half the numbers
// 'a < n', computing 'a^(n-1)' in this way will reveal a nontrivial square root of 1 modulo n. (This
// is why the Miller-Rabin test cannot be fooled.) Modify the 'expmod' function to signal if
// it discovers a nontrivial square root of 1, and use this to implement the Miller-Rabin test
// with a function analogous to 'fermat_test'. Check your function by testing various known
// primes and non-primes. Hint: One convenient way to make 'expmod' signal is to have it
// return 0.

// a^(n-1) % n === 1 % n
// The smallest a can be is 1, therefore, the smallest n can be is 2 since a < n.
// Therefore, 1 % n is always equal to 1 in this case.
// So: a^(n-1) % n === 1

function trivial_test(r, n) {
    return !(r === 1 || r === n - 1) && square(r) % n === 1
        ? 0 // not a prime number
        : r;
}

function expmod(base, exp, m) {
    return exp === 0
        ? 1
        : is_even(exp)
        ? square(trivial_test(expmod(base, exp / 2, m), m)) % m
        : (base * expmod(base, exp - 1, m)) % m;
}

function is_even(n) {
    return n % 2 === 0;
}

function square(x) {
    return x * x;
}

function miller_rabin_test(n) {
    function try_it(a) {
        return expmod(a, n - 1, n) === 1;
    }
    return try_it(1 + math_floor(math_random() * (n - 1)));
}

function miller_rabin_is_prime(n, times) {
    return times === 0
        ? true
        : miller_rabin_test(n)
        ? miller_rabin_is_prime(n, times - 1)
        : false;
}

// miller_rabin_is_prime(561, 10); // false
// miller_rabin_is_prime(1105, 10); // false
// miller_rabin_is_prime(1729, 10); // false
// miller_rabin_is_prime(2465, 10); // false
// miller_rabin_is_prime(2821, 10); // false
// miller_rabin_is_prime(6601, 10); // false
// miller_rabin_is_prime(1, 10); // true
// miller_rabin_is_prime(2, 10); // true
// miller_rabin_is_prime(3, 10); // true
// miller_rabin_is_prime(4, 10); // false
// miller_rabin_is_prime(5, 10); // true
// miller_rabin_is_prime(11, 10); // false
// miller_rabin_is_prime(12, 10); // false
