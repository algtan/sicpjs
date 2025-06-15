// Section 2.2.1
// page 89

// Exercise 2.20

// In the presence of higher-order functions, it is not strictly necessary for
// functions to have multiple parameters; one would suffice. If we have a
// function such as 'plus' that naturally requires two arguments, we could
// write a variant of the function to which we pass the arguments one at a time.
// An application of the variant to the first argument could return a function
// that we can then apply to the second argument, and so on. This practice -
// called 'currying' and named after the American mathematician and logician
// Haskell Brooks Curry - is quite common in programming languages such as
// Haskell and Ocaml. In JavaScript, a curried version of 'plus' looks as
// follows.

function plus_curried(x) {
    return y => x + y;
}

// Part a
// Write a function 'brooks' that takes a curried function as first argument and
// as second argument a list of arguments to which the curried function is then
// applied, one by one, in the given order. For example, the following
// application of 'brooks' should have the same effect as 'plus_curried(3)(4)':

// brooks(plus_curried, list(3, 4));
// 7

function brooks(cf, ls) {
    return is_null(ls)
           ? cf
           : brooks(cf(head(ls)), tail(ls));
}

brooks(plus_curried, list(3, 4)); // 7

// Part b
// While we are at it, we might as well curry the function 'brooks'! Write a
// function 'brooks-curried' that can be applied as follows:

// brooks_curried(list(plus_curried, 3, 4));
// 7

function brooks_curried(ls) {
    return brooks(head(ls), tail(ls));
}

brooks_curried(list(plus_curried, 3, 4)); // 7

// Part c
// With this function 'brooks_curried', what are the results of evaluating the
// following two statements?

// brooks_curried(list(brooks_curried,
//                     list(plus_curried, 3, 4)));

// brooks_curried(list(brooks_curried,
//                     list(brooks_curried,
//                          list(plus_curried, 3, 4))));

brooks_curried(list(brooks_curried,
                    list(plus_curried, 3, 4))); // 7

brooks_curried(list(brooks_curried,
                    list(brooks_curried,
                         list(plus_curried, 3, 4)))); // 7
