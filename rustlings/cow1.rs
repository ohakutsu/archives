// cow1.rs

// This exercise explores the Cow, or Clone-On-Write type.
// Cow is a clone-on-write smart pointer.
// It can enclose and provide immutable access to borrowed data, and clone the data lazily when mutation or ownership is required.
// The type is designed to work with general borrowed data via the Borrow trait.

use std::borrow::Cow;

fn abs_all<'a, 'b>(input: &'a mut Cow<'b, [i32]>) -> &'a mut Cow<'b, [i32]> {
    for i in 0..input.len() {
        let v = input[i];
        if v < 0 {
            // Clones into a vector if not already owned.
            input.to_mut()[i] = -v;
        }
    }
    input
}

fn main() {
    // No clone occurs because `input` doesn't need to be mutated.
    let slice = [0, 1, 2];
    let mut input = Cow::from(&slice[..]);
    match abs_all(&mut input) {
        Cow::Borrowed(_) => println!("I borrowed the slice!"),
        _ => panic!("expected borrowed value"),
    }
    println!("slice ptr: {:?}", slice.as_ptr());
    println!("input ptr: {:?}", input.as_ptr());

    // Clone occurs because `input` needs to be mutated.
    let slice = [-1, 0, 1];
    let mut input = Cow::from(&slice[..]);
    match abs_all(&mut input) {
        Cow::Owned(_) => println!("I modified the slice and now own it!"),
        _ => panic!("expected owned value"),
    }
    println!("slice ptr: {:?}", slice.as_ptr());
    println!("input ptr: {:?}", input.as_ptr());

    // No clone occurs because `input` is already owned.
    let slice = vec![-1, 0, 1];
    let slice_ptr = slice.as_ptr();
    let mut input = Cow::from(slice);
    match abs_all(&mut input) {
        // TODO
        // See https://github.com/rust-lang/rustlings/issues/1195
        Cow::Owned(_) => println!("I own this slice!"),
        _ => panic!("expected owned value"),
    }
    println!("slice ptr: {:?}", slice_ptr);
    println!("input ptr: {:?}", input.as_ptr());

    let slice = vec![0, 1, 2];
    let slice_ptr = slice.as_ptr();
    let mut input = Cow::from(slice);
    match abs_all(&mut input) {
        Cow::Owned(_) => println!("I own this slice!"),
        _ => panic!("expected owned value"),
    }
    println!("slice ptr: {:?}", slice_ptr);
    println!("input ptr: {:?}", input.as_ptr());
}
