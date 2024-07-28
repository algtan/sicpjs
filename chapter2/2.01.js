// Section 2.1.1
// page 76

// Definte a better version of 'make_rat' that handles both positive and
// negative arguments. The function 'make_rat' should normalize the sign so
// that if the rational number is positive, both the numerator and denominator
// are positive, and if the rational number is negative, only the numerator
// is negative.

// p. 74
// function make_rat(n, d) {
//    return pair(n, d);
//}

function make_rat(n, d) {
    return pair(math_sign(n) * math_sign(d) * math_abs(n), math_abs(d));
}

function numer(x) {
    return head(x);
}

function denom(x) {
    return tail(x);
}

const rat_num = make_rat(1, -2);

numer(rat_num);

denom(rat_num);
