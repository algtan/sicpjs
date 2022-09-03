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
