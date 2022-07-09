// Section 1.2.6
// page 47

// The 'smallest_divisor' function shown at the start of this section does lots of needless
// testing: After it checks to see if the number is divisible by 2 there is no point in checking
// to see if it is divisible by any larger even numbers. This suggests that the values used for
// 'test_divisor' should not be 2, 3, 4, 5, 6, ... but rather 2, 3, 5, 7, 9, .... To implement this
// change, declare a function 'next' that returns 3 if its input is equal to 2 and otherwise returns
// its input plus 2. Modify the 'smallest_divisor' function to use 'next(test_divisor)' instead
// of 'test_divisor + 1'. With 'timed_prime_test' incorporating this modified version
// of 'smallest_divisor', run the test for each of the 12 primes found in exercise 1.22. Since
// this modification halves the number of test steps, you should expect it to run about twice
// as fast. Is this expectation confirmed? If not, what is the observed ratio of the speeds of the
// two algorithms, and how do you explain the fact that it is different from 2?

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
        : find_divisor(n, next(test_divisor));
}

function divides(a, b) {
    return b % a === 0;
}

function square(x) {
    return x * x;
}


function next(divisor) {
    return divisor === 2
        ? 3
        : divisor + 2;
}


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

// The expectation that the modification should run about twice as fast was not
// confirmed, as it was about 1.5x as fast. This may be due to hardware or
// network issues.