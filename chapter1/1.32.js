// Section 1.3.1
// page 53

// Part a

// Show that 'sum' and 'product' (exercise 1.31) are both special cases of a still more general
// notion called 'accumulate' that combines a collection of terms using some general
// accumulation function:

// accumulate(combiner, null_value, term, a, next, b);

// The function 'accumulate' takes as arguments the same term and range specifications as
// 'sum' and 'product', together with a 'combiner' function (of two arguments) that specifies
// how the current term is to be combined with the accumulation of the preceding terms
// and a 'null_value' that specifies what base value to use when the terms run out. Write
// 'accumulate' and show how 'sum' and 'product' can both be declared as simple calls to
// 'accumulate'.

// Part b

// If your 'accumulate' function generates a recursive process, write one that generates an
// iterative process. If it generates an iterative process, write one that generates a recursive
// process.
