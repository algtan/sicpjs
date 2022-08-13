// Section 1.3.2
// page 58

// Suppose we declare

function f(g) {
    return g(2);
}

// Then we have

// f(square);
// 4

// f(z => z * (z + 1));
// 6

// What happens if we (perversely) ask the interpreter to evaluate the application f(f)?
// Explain.

// f(f); // -> return f(2);
// f(2); // -> return 2(2);
// 2(2);

f(f);

// We end up with an error as we call a non-function '2'.


f(square);
// square(2)
// 2 * 2
// 4

f(z => z * (z + 1));
// (z => z * (z + 1))(2)
// 2 * (2 + 1)
// 2 * 3
// 6