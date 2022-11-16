const BUF_SIZE: usize = 16;

fn main() {
    let mut buf = [0; BUF_SIZE];

    for i in 0..(BUF_SIZE + 2) {
        buf[i] = i;
        println!("buf[{}]: {}", i, buf[i]);
    }
}
