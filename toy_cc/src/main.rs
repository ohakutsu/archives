use std::iter::Peekable;

fn strtou<I>(iter: &mut Peekable<I>) -> usize
where
    I: Iterator<Item = char>,
{
    let mut result: usize = 0;

    loop {
        match iter.peek() {
            Some(c) => match c.to_digit(10) {
                Some(i) => {
                    let i: usize = i.try_into().unwrap();
                    result = result * 10 + i;
                }
                None => break,
            },
            None => break,
        }
        iter.next();
    }

    result
}

fn main() {
    let args: Vec<_> = std::env::args().collect();
    if args.len() != 2 {
        panic!("argument error");
    }

    let mut iter = args[1].chars().peekable();

    println!(".intel_syntax noprefix");
    println!(".globl main");
    println!("main:");
    println!("  mov rax, {}", strtou(&mut iter));

    loop {
        match iter.next() {
            Some(c) => match c {
                '+' => {
                    println!("  add rax, {}", strtou(&mut iter));
                }
                '-' => {
                    println!("  sub rax, {}", strtou(&mut iter));
                }
                _ => panic!("Unexpected char"),
            },
            None => break,
        }
    }

    println!("  ret");
}
