// Section 2.2.1
// page 92

// Exercise 2.22

// Part a
// Louis Reasoner tries to rewrite the first 'square_list' function of exercise
// 2.21 so that it evolves an interative process:

// function square_list(items) {
//     function iter(things, answer) {
//         return is_null(things)
//               ? answer
//               : iter(tail(things),
//                      pair(square(head(things)),
//                           answer));
//     }
//     return iter(items, null);
// }

// Unfortunately, defining 'square_list' this way procues the answer list in the
// reverse order of the one desired. Why?


// Part b
// Louis then tries to fix his bug by interchanging the arguments to pair:

// function square_list(items) {
//     function iter(things, answer) {
//         return is_null(things)
//               ? answer
//               : iter(tail(things),
//                     pair(answer,
//                          square(head(things))));
//     }
// }

// This doesnt work either. Explain.