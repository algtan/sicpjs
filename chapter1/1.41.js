// Section 1.3.4
// page 67

// Declare a function 'double' that takes a funciton of one argument as argument and returns
// a function that applies the original function twice. For example, if 'inc' is a function that
// adds 1 to its argument, then 'double(inc)' should be a function that adds 2. What value is
// returned by

// double(double(double))(inc)(5);

function double(f) {
  return (x) => f(f(x));
}

function inc(x) {
  return x + 1;
}

// double(inc)(1); // 3

double(double(double))(inc)(5); // 21

// double(inc)(5); // adds 2
// double(double)(inc)(5); // adds 2^2 (4)
// double(double(double))(inc)(5) // adds 4^2 (16)
// double(double(double(double)))(inc)(5); // adds 16^2 (256)

function plus_two(x) {
  return x + 2;
}

double(plus_two)(1); // adds 4 (2 * 2^1) for a final answer of 5
double(double(plus_two))(1); // adds 8 (2 * 2^2) for a final answer of 9
double(double(double))(plus_two)(1); // adds 32 (2 * 2^4) for a final answer of 33
double(double(double(double)))(plus_two)(1); // adds 512 (2 * 2^8) for a final answer of 513

function plus_three(x) {
  return x + 3;
}

double(plus_three)(1); // adds 6 (3 * 2^1) for a final answer of 7
double(double(plus_three))(1); // adds 12 (3 * 2^2) for a final answer of 9
double(double(double))(plus_three)(1); // adds 48 (3 * 2^4) for a final answer of 49
double(double(double(double)))(plus_three)(1); // adds 768 (3 * 2^8) for a final answer of 513

function plus_five(x) {
  return x + 5;
}

double(plus_five)(1); // adds 10 (5 * 2^1) for a final answer of 11
double(double(plus_five))(1); // adds 20 (5 * 2^2) for a final answer of 21
double(double(double))(plus_five)(1); // adds 80 (5 * 2^4) for a final answer of 81
double(double(double(double)))(plus_five)(1); // adds 1280 (5 * 2^8) for a final answer of 1281
