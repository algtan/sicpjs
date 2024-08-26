// Section 2.1.3
// page 80

// Show that we can represent pairs of nonnegative integers using only numbers
// and arithmetic operations if we represent the pair 'a' and 'b' as the integer
// that is the product '2^a * 3^b'. Give the corresponding definitions of the
// functions 'pair', 'head', and 'tail'.

function new_pair(a, b) {
    return math_pow(2, a) * math_pow(3, b);
}

function new_head(p) {
    return p % 2 === 0 ? new_head(p / 2) + 1 : 0;
}

function new_tail(p) {
    return p % 3 === 0 ? new_tail(p / 3) + 1 : 0;
}

new_head(new_pair(2, 1)); // 2
new_tail(new_pair(1, 3)); // 3