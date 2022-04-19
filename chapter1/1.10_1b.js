// Section 1.2.1
// page 31

// The following function computes a mathematical function called Ackermann's function.

function A(x, y) {
    return y === 0
           ? 0
           : x === 0
           ? 2 * y
           : y === 1
           ? 2
           : A(x - 1, A(x, y - 1));
}

// * Part 1 *
// What are the values of the following statements?

// * Part 1b *
A(2, 4);

// From Part 1a, we saw that A(1, n) = 2^n

// A(2, 4) //
// A(1, A(2, 3))
// A(1, A(1, A(2, 2)))
// A(1, A(1, A(1, A(2, 1))))
// A(1, A(1, A(1, 2)))
// A(1, A(1, 4))
// A(1, 16)
// 65536
