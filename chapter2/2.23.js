// Section 2.2.1
// page 92

// Exercise 2.23

// The function 'for_each' is similar to 'map'. It takes as arguments a
// function and a list of elements. However, rather than forming a list of the
// results, 'for_each' just applies the function to each of the elements in
// turn, from left to right. The values returned by applying the function to
// the elemetns are not used at all - 'for_each' is used with functions that
// perform an action, such as print. For example,

// for_each(x => display(x), list(57, 321, 88));
// 57
// 321
// 88

// The value returned by the call to 'for_each' (not illustrated above) can be
// something arbitrary, such as true. Give an implementation of 'for_each'.

function for_each(fn, ls) {
    if (is_null(ls)) {
        return undefined;
    }
    
    fn(head(ls));
    return for_each(fn, tail(ls));
}

for_each(x => display(x), list(57, 321, 88));