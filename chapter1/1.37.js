// Section 1.3.3
// page 62

// An infinite 'continued fraction' is an expression of the form

// f = N1 / (D1 + N2 / (D2 + N3 / (D3 + ...)))

// As an example, one can show that the infinite continued fraction expression with the
// N1 and D1 all equal to 1 produces 1 / phi, where phi is the golden ratio (described in
// section 1.2.2). One way to approximate an infinite continued fraction is to truncate the
// expansion after a given number of terms. Such a truncation - a so-called 'k-term finite
// continued fraction' - has the form

// N1 / (D1 + N2 / (... + Nk / Dk))


// Part a
// Suppose that 'n' and 'd' are functions of one argument (the term index 'i') that return the
// N1 and D1 of the terms of the continued fraction. Declare a function 'cont_frac' such
// that evaluation 'cont_frac(n, d, k)' computes the value of the k-term finite continued
// fraction. Check your function by approxmiating 1 / phi using

// cont_frac(i => 1, i => 1, k);

// for successive values of 'k'. How large must you make 'k' in order to get an approximation
// that is accurate to 4 decimal places?


// Part b
// If your 'cont_frac' function generates a recursive process, write one that generates an
// iterative process. If it generates an iterative process, write one that generates a recursive
// process.
