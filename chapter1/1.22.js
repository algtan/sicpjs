// Section 1.2.6
// page 46

// Assume a primitive function 'get_time' of no arguments that returns the number of milliseconds
// that have passed since 00:00:00 UTC on Thursday, 1 january, 1970. The following
// 'timed_prime_test' function, when called with an integer 'n', prints 'n' and checks to see if 'n'
// is prime. If 'n' is prime, the function prints three asterisks followed by the amount of time
// used in performing the test.

function timed_prime_test(n) {
    display(n);
    return start_prime_test(n, get_time());
}

function start_prime_test(n, start_time) {
    return is_prime(n)
        ? report_prime(get_time() - start_time)
        : true;
}

function report_prime(elapsed_time) {
    display(" *** ");
    display(elapsed_time);
}

function is_prime(n) {
    return n === smallest_divisor(n);
}

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

function divides(a, b) {
    return b % a === 0;
}

function square(x) {
    return x * x;
}

// Using this function, write a function 'search_for_primes' that checks the primality of
// consecutive odd numbers in a specified range. Use your function to find the three smallest
// primes larger than 1000; larger than 10,000; larger than 100,000; larger than 1,000,000.
// Note the time needed to test each prime. Since the testing algorithm has order of growth
// of THETA(sqrt(n)), you should expect that testing for primes around 10,000 should take about sqrt(10)
// times as long as testing for primes around 1000. Do your timing data bear this out? How
// well do the data for 100,000 and 1,000,000 support the sqrt(n) prediction? Is your result
// compatible with the notion that programs on your machine run in time proportional to
// the number of steps required for the computation?

function search_for_primes(start_num, num_of_primes) {
    return num_of_primes <= 0
        ? true
        : start_num <= 0 || (start_num % 2 === 0 && start_num > 2) // Numbers that are less than or equal to zero are not prime. Same with even numbers greater than 2.
        ? search_for_primes(start_num + 1, num_of_primes)
        : (start_num >= 1 && start_num <= 2) && is_undefined(timed_prime_test(start_num))
        ? search_for_primes(start_num + 1, num_of_primes - 1)
        : is_undefined(timed_prime_test(start_num))
        ? search_for_primes(start_num + 2, num_of_primes - 1)
        : search_for_primes(start_num + 2, num_of_primes);
}

search_for_primes(1000000, 3);
search_for_primes(10000000, 3);

// It is not until the jump from 1,000,000 to 10,000,000 that we see that the time to run
// increases by about sqrt(10). Yes, my result is compatible with the notion that programs
// on a machine run in time proportional to the number of steps required for the
// computation.
