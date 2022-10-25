use std::collections::VecDeque;
use std::io;
use std::io::{BufRead, Write};

fn tail<T>(f: T, nlines: usize)
where
    T: io::Read,
{
    let mut ringbuf = VecDeque::new();

    if nlines == 0 {
        return;
    }

    let mut f = io::BufReader::new(f);

    loop {
        let mut line = String::new();
        let read_char_num = f.read_line(&mut line).unwrap();
        if read_char_num == 0 {
            break;
        }

        if ringbuf.len() > nlines {
            ringbuf.pop_front().unwrap();
        }

        ringbuf.push_back(line);
    }

    let stdout = io::stdout();
    let mut stdout = io::BufWriter::new(stdout);

    for line in ringbuf {
        stdout.write(line.as_bytes()).unwrap();
    }
}

fn main() {
    let argv: Vec<String> = std::env::args().collect();
    let argc = argv.len();

    if argc != 2 {
        panic!("Usage: {} n", argv[0]);
    }

    let stdin = io::stdin();
    let nlines = argv[1].parse().unwrap();

    tail(stdin, nlines);
}
