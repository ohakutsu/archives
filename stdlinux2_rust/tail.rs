use std::collections::VecDeque;
use std::env;
use std::io;
use std::io::{BufRead, Write};

const N_LINES: usize = 10;

fn tail<T>(f: T)
where
    T: io::Read,
{
    let mut buff: VecDeque<String> = VecDeque::new();

    let mut f = io::BufReader::new(f);

    loop {
        let mut line = String::new();
        let num = f.read_line(&mut line).unwrap();

        if num == 0 {
            break;
        }

        if buff.len() == N_LINES {
            buff.pop_front().unwrap();
        }
        buff.push_back(line);
    }

    let stdout = io::stdout();
    let mut stdout = io::BufWriter::new(stdout);
    for line in buff {
        stdout.write(line.as_bytes()).unwrap();
    }
}

fn main() {
    let argv: Vec<String> = env::args().collect();
    let argc = argv.len();

    if argc != 1 {
        panic!("Usage: {} < infile", argv[0]);
    }

    let stdin = io::stdin();

    tail(stdin);
}
