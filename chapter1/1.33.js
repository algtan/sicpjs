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