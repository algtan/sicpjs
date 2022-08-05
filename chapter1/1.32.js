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

// function sum(term, a, next, b) {
//     return a >
//         ? 0
//         : term(a) + sum(term, next(a), next, b);
// }

// function product_recursive(term, a, next, b) {
//     return a > b
//         ? 1
//         : term(a) * product_recursive(term, next(a), next, b);
// }

function accumulate_recursive(combiner, null_value, term, a, next, b) {
  return a > b
    ? null_value
    : combiner(
        term(a),
        accumulate_recursive(combiner, null_value, term, next(a), next, b)
      );
}

function sum_acc_r(term, a, next, b) {
  function sum(x, y) {
    return x + y;
  }
  return accumulate_recursive(sum, 0, term, a, next, b);
}

function product_acc_r(term, a, next, b) {
  function product(x, y) {
    return x * y;
  }
  return accumulate_recursive(product, 1, term, a, next, b);
}

function inc(x) {
  return x + 1;
}

function identity(x) {
  return x;
}

// sum_acc_r(identity, 0, inc, 3); // 6
// sum_acc_r(identity, 0, inc, 4); // 10

// product_acc_r(identity, 1, inc, 2); // 2
// product_acc_r(identity, 1, inc, 3); // 6
// product_acc_r(identity, 1, inc, 4); // 24

// Part b

// If your 'accumulate' function generates a recursive process, write one that generates an
// iterative process. If it generates an iterative process, write one that generates a recursive
// process.

function accumulate_iterative(combiner, null_value, term, a, next, b) {
    function iter(a, result) {
        return a > b
            ? result
            : iter(next(a), combiner(term(a), result));
    }
    return iter(a, null_value);
}

function sum_acc_i(term, a, next, b) {
    function sum(x, y) {
        return x + y;
    }
    return accumulate_iterative(sum, 0, term, a, next, b);
}

function product_acc_i(term, a, next, b) {
    function product(x, y) {
        return x * y;
    }
    return accumulate_iterative(product, 1, term, a, next, b);
}

// sum_acc_i(identity, 0, inc, 3); // 6
// sum_acc_i(identity, 0, inc, 4); // 10

// product_acc_i(identity, 1, inc, 2); // 2
// product_acc_i(identity, 1, inc, 3); // 6
// product_acc_i(identity, 1, inc, 4); // 24