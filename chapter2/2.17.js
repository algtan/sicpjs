// Section 2.2.1
// page 89

// Exercise 2.17

// Define a function 'last_pair' that returns the list that contains only the
// last element of a given (nonempty) list:

// last_pair(list(23, 72, 149, 34))
// list(34)

function last_pair(ls) {
    return is_null(tail(ls))
           ? ls
           : last_pair(tail(ls));
}

last_pair(list(23, 72, 149, 34)); // [34, null]
