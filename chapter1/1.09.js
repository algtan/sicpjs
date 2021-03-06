// Section 1.2.1
// page 30

// Each of the following two functions defines a method for adding two positive integers in
// terms of the functions 'inc', which increments its argument by 1, and 'dec', which decrements
// its argument by 1.

// A
function plus(a, b) {
    return a === 0 ? b : inc(plus(dec(a), b));
}

// B
function plus(a, b) {
    return a === 0 ? b : plus(dec(a), inc(b));
}

// Using the substitution model, illustrate the process generated by each function in evaluating
// 'plus(4, 5);'. Are these preocesses iterative or recursive?


// A
plus(4, 5)
// 4 === 0 ? 5 : inc(plus(3, 5))
inc(plus(3, 5))
// 3 === 0 ? 5 : inc(plus(2, 5))
inc(inc(plus(2, 5)))
// 2 === 0 ? 5 : inc(plus(1, 5))
inc(inc(inc(plus(1, 5))))
// 1 === 0 ? 5 : inc(plus(0, 5))
inc(inc(inc(inc(plus(0, 5)))))
// 0 === 0 ? 5 : inc(plus(-1, 5))
inc(inc(inc(inc(5))))
inc(inc(inc(6)))
inc(inc(7))
inc(8)
9

// A is recursive


// B
plus(4, 5)
// 4 === 0 ? 5 : plus(3, 6)
plus(3, 6)
// 3 === 0 ? 6 : plus(2, 7)
plus(2, 7)
// 2 === 0 ? 7 : plus(1, 8)
plus(1, 8)
// 1 === 0 ? 8 : plus(0, 9)
plus(0, 9)
// 0 === 0 ? 9 : plus(-1, 10)
9

// B is iterative