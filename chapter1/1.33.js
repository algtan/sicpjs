// Section 1.3.1
// page 53

// You can obtain an even more general version of 'accumulate' (exercise 1.32) by introducing
// the notion of a 'filter' on the terms to be combined. That is, combine only those terms
// dervied from values in the range that satisfy a specified condition. The resulting
// 'filtered_accumulate' abstraction takes the same arguments as accumulate, together with an
// additional predicate of one argument that specifies the filter. Write 'filtered_accumulate'
// as a function. Show how to express the following using 'filtered_accumulate':

// Part a

// the sum of the squares of the prime numbers in the interval 'a' to 'b' (assuming that you
// have an 'is_prime predicate already written)

// Part b

// the product of all positive integers less than 'n' that are relatively prime to 'n' (i.e., all
// positive integers 'i < n' such that GCD(i, n) = 1).

function smallest_divisor(n) {
    return find_divisor(n, 2);
}

function find_divisor(n, test_divisor) {
    return square(test_divisor) > n
        ? n
        : divides(test_divisor, n)
        ? test_divisor
        : find_divisor(n, test_divisor + 1);
}

function square(x) {
    return x * x;
}

function divides(a, b) {
    return b % a === 0;
}

function is_prime(n) {
    return n === smallest_divisor(n);
}

// function accumulate_recursive(combiner, null_value, term, a, next, b) {
//   return a > b
//     ? null_value
//     : combiner(
//         term(a),
//         accumulate_recursive(combiner, null_value, term, next(a), next, b)
//       );
// }

function filtered_accumulate(combiner, null_value, term, a, next, b, filter) {
    return a > b
        ? null_value
        : filter(a)
        ? combiner(
            term(a),
            filtered_accumulate(combiner, null_value, term, next(a), next, b, filter)
            )
        : filtered_accumulate(combiner, null_value, term, next(a), next, b, filter);
}

// Part a
function inc(x) {
    return x + 1;
}

function sum_of_squares(a, b) {
    function sum(x, y) {
        return x + y;
    }
    return filtered_accumulate(sum, 0, square, a, inc, b, is_prime);
}

// sum_of_squares(2, 2); // 4
// sum_of_squares(2, 3); // 13
// sum_of_squares(2, 4); // 13
// sum_of_squares(2, 5); // 38