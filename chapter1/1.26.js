// Section 1.2.6
// page 47

// Louis Reasoner is having great difficulty doing exercise 1.24. His 'fast_is_prime' test
// seems to run more slowly than his 'is_prime' test. Louis calls his friend Eva Lu Ator over to
// help. When they examine Louis' code, they find that he has rewritten the 'expmod' function
// to use an explicit multiplication, rather than calling 'square':

function expmod(base, exp, m) {
  return exp === 0
    ? 1
    : is_even(exp)
    ? (expmod(base, exp / 2, m) * expmod(base, exp / 2, m)) % m
    : (base * expmod(base, exp - 1, m)) % m;
}

// "I don't see what difference that could make," says Louis. "I do." says Eva. "By writing the
// function like that, you have transformed the Big Theta(log n) process into a Big Theta(n) process." Explain.

// If JavaScript used a normal-order evaluation, then Louis Reasoner may have
// a point as function arguments may end up being evaluated more than once. But
// since JavaScript uses applicative-order evaluation, using 'square' instead of
// having 'expmod' twice allows us to halve the exp, reducing the process
// from Big Theta(n) to Big Theta(log n).
