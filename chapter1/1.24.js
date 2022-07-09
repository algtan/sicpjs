// Section 1.2.6
// page 47

// Modify the 'timed_prime_test' function of exercise 1.22 to use 'fast_is_prime' (the Fermat
// method), and test each of the 12 primes you found in that exercise. Since the Fermat
// test has Big Theta(log n) growth, how would you expect the time to test primes near 1,000,000 to
// compare with the time needed to test primes near 1000? Do your data bear this out? Can
// you explain any discrepancy you find?

function timed_prime_test(n) {
  display(n);
  return start_prime_test(n, get_time());
}

function start_prime_test(n, start_time) {
  return fast_is_prime(n, math_floor(math_log(n)))
    ? report_prime(get_time() - start_time)
    : true;
}

function report_prime(elapsed_time) {
  display(" *** ");
  display(elapsed_time);
}

function fast_is_prime(n, times) {
  return times === 0
    ? true
    : fermat_test(n)
    ? fast_is_prime(n, times - 1)
    : false;
}

function fermat_test(n) {
  function try_it(a) {
    return expmod(a, n, n) === a;
  }
  return try_it(1 + math_floor(math_random() * (n - 1)));
}

function expmod(base, exp, m) {
  return exp === 0
    ? 1
    : is_even(exp)
    ? square(expmod(base, exp / 2, m)) % m
    : (base * expmod(base, exp - 1, m)) % m;
}

function is_even(x) {
  return x % 2 === 0;
}

function square(x) {
  return x * x;
}

function search_for_primes(start_num, num_of_primes) {
  return num_of_primes <= 0
    ? true
    : start_num <= 0 || (start_num % 2 === 0 && start_num > 2) // Numbers that are less than or equal to zero are not prime. Same with even numbers greater than 2.
    ? search_for_primes(start_num + 1, num_of_primes)
    : start_num >= 1 &&
      start_num <= 2 &&
      is_undefined(timed_prime_test(start_num))
    ? search_for_primes(start_num + 1, num_of_primes - 1)
    : is_undefined(timed_prime_test(start_num))
    ? search_for_primes(start_num + 2, num_of_primes - 1)
    : search_for_primes(start_num + 2, num_of_primes);
}

search_for_primes(1000000, 3);
search_for_primes(10000000, 3);

// I would expect the time to test primes near 1,000,000 to be double that of
// 1,000. The data does not bear this out probably due to hardware. To see the
// affect on time better, this should be tested with larger numbers.
