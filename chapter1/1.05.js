// Section 1.1.6
// page 17

// Ben Bitdiddle has invented a test to determine whether the interpreter he is faced with is
// using applicative-order evaluation or normal-order evaluation. He declares the following
// two functions:

// function p() { return p(); }

// function test(x, y) {
    // return x === 0 ? 0 : y;
// }

// Then he evaluates the statement

// test(0, p());

// What behavior will Ben observe with an interpreter that uses applicative-order evaluation?
// What behavior will he observe with an interpreter that uses normal-order evaluation?
// Explain your answer.
// (Assume that the evaluation rule for conditional expressions is the same whether the
// interpreter is using normal or applicative order: The predicate expression is evaluated
// first, and the result determines whether to evaluate the consequent or alternate
// expression.)

// For an interpreter that uses applicative-order evaluation, it will first evaluate the
// arguments for 'test'. Test will call 'p()', but it will be be stuck as it calls it
// recursively, causing a stack overflow.

// For an interpreter that uses normal-order evaluation, it will not evaluate 'p()' until
// it needs it. So 'test' will be called, and it will see that x, which is 0, is equal to 0.
// As a result, '0' will be returned, and 'p()' is never evaluated.