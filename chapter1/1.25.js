// Section 1.2.6
// page 47

// Alyssa P. Hacker complains that we went to a lot of extra work in writing 'expmod'. After
// all, she says, since we already kow how to compute exponentials, we could have simply
// written

function expmod(base, exp, m) {
  return fast_exp(base, exp) % m;
}

// Is she correct? Would this funciton serve as well for our fast prime tester? Explain.

// From page 41
function fast_exp(b, n) {
  return n === 0
    ? 1
    : is_even(n)
    ? square(fast_exp(b, n / 2))
    : b * fast_exp(b, n - 1);
}

function is_even(n) {
  return n % 2 === 0;
}

function square(x) {
  return x * x;
}

// From page 44
function old_expmod(base, exp, m) {
  return exp === 0
    ? 1
    : is_even(exp)
    ? square(old_expmod(base, exp / 2, m)) % m
    : (base * old_expmod(base, exp - 1, m)) % m;
}

// new expmod
expmod(2, 3, 3);
// fast_exp(2, 3) % 3
// (2 * fast_exp(2, 2)) % 3
// (2 * square(fast_exp(2, 1))) % 3
// (2 * square(2 * fast_exp(2, 0))) % 3
// (2 * square(2 * 1)) % 3
// (2 * square(2)) % 3
// (2 * 4) % 3
// 8 % 3
// 2

// old expmod
old_expmod(2, 3, 3);
// (2 * old_expmod(2, 2, 3)) % 3

// old_expmod(2, 2, 3)
// square(old_expmod(2, 1, 3)) % 3

// old_expmod(2, 1, 3)
// (2 * old_expmod(2, 0, 3)) % 3

// old_expmod(2, 0, 3)
// 1

// old_expmod(2, 3, 3)
// (2 * (square((2 * 1) % 3) % 3)) % 3
// (2 * (square(2 % 3) % 3)) % 3
// (2 * (square(2) % 3)) % 3
// (2 * (4 % 3)) % 3
// (2 * 1) % 3
// 2 % 3
// 2

// This function would not serve as well as our fast prime tester when it comes
// to significantly large numbers. That is because the old version of expmod
// has intermediate modulos between each step, whereas in the Alyssa's version,
// there is only one modulo at the end.
