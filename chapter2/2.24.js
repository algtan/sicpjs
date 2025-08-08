// Section 2.2.2
// page 94

// Exercise 2.24

// Suppose we evaluate the expression `list(1, list(2, list(3, 4)))`. Give the
// result printed by the interpreter, the corresponding box-and-pointer
// structure, and the interpretation of this as a tree (as in figure 2.6).

// Interpreter:

// list(3, 4)
// [3, [4, null]]

// list(2, list(3, 4))
// [2, [list(3, 4), null]]
// [2, [[3, [4, null]], null]] // substitute list(3, 4)'s box notation

// list(1, list(2, list(3, 4)))
// [1, [list(2, list(3, 4))], null]
// [1, [[2, [[3, [4, null]], null]], null]] //substitute list(2, list(3, 4))'s box notation

const l = list(1, list(2, list(3, 4)));
display_list(l);

// Box-and-pointer and tree diagrams completed in notebook