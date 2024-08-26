// Section 2.1.3
// page 80

// In case representing pairs as functions (exercise 2.4) wasn't mind-boggling
// enough, consider that, in a language that can manipulate functions, we can
// get by without numbers (at least insofar as nonnegative integers are
// concerned) by implementing 0 and the operation of adding 1 as

const zero = f => x => x;

function add_1(n) {
    return f => x => f(n(f)(x));
}

// This representation is known as 'Church numerals', after its inventor,
// Alonzo Church, the logician who invented the lambda calculus.

// Define 'one' and 'two' directly (not in terms of 'zero' and 'add_1'). (Hint:
// Use substitution to evaluate 'add_1(zero)'). Give a direct definition of the
// addition function 'plus (not in terms of repeated application of 'add_1').