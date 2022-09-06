// Section 1.3.4
// page 68

// The idea of 'smoothing' a function is an important concept in signal processing. If 'f' is a
// function and 'dx' is some small number, then the smoothed version of 'f' is the function
// whose value at a point 'x' is the average of 'f(x - dx)', 'f(x)'', and 'f(x + dx)'. Write a function
// 'smooth' that takes as input a function that computes 'f' and returns a function that computes
// the smoothed 'f'. It is sometimes valuable to repeatedly smooth a function (that is, smooth
// the smoothed function, and so on) to obtain the 'n-fold smoothed function'. Show how to
// generate the n-fold smoothed function of any given function using 'smooth' and 'repeated'
// from exercise 1.43.

function compose(f, g) {
    return x => f(g(x));
}

function repeated(f, times) {
    return times === 1
        ? x => f(x)
        : repeated(compose(f, f), times - 1);
}


const dx = 0.00001;
function smooth(f) {
    return x => (f(x - dx) + f(x) + f(x + dx)) / 3;
}

function n_fold_smooth(f, n) {
    return repeated(smooth, n)(f);
}

// We want smooth to be repeated, not smooth(f):

// smooth(smooth(smooth))(f); YES

// smooth(f(smooth(f))); NO
