// Section 1.3.4
// page 68

// If 'f' is a numerical function and 'n' is a positive integer, then we can form the nth repeated
// application of 'f', which is defined to be the function whose value at 'x' is 'f(f(...(f(x))...))'.
// For example, if 'f' is the function x -> x + 1, then the nth repeated application of 'f' is the
// function x -> x + n. If 'f' is the operation of squaring a number, then the nth repeated application
// of 'f' is the function that raises its argument to be the 2^nth power. Write a function that
// takes as inputs a function that computes 'f' and a positive integer 'n' and returns the function
// that computes the nth repeated application of 'f'. Your funciton should be able to be used as
// follows:

// repeated(square, 2)(5);
// 625

// Hint: You may find it conveneient to use 'compose' from exercise 1.42.

function compose(f, g) {
    return x => f(g(x));
}
