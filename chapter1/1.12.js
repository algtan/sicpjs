// Section 1.2.2
// page 36

// The following pattern of numbers is called `Pascal's triangle`.

//          1
//        1   1
//      1   2   1
//    1   3   3   1
//  1   4   6   4   1
//         ...

// The numbers at the edge of the triangle are all 1, and each number inside the triangle is the
// sum of the two numbers above it. Write a function that computes elements of Pascal's
// triangle by means of a recursive process.


function pascal_triangle(row, index) {
    return index <= 0 || row <= 0 || index > row
           ? 0
           : index === 1 || index === row
           ? 1
           : pascal_triangle(row-1, index-1) + pascal_triangle(row-1, index);
}

pascal_triangle(5, 3);