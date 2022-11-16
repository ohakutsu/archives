fn main() {
    for i in 1..10000000 {
        let str = format!("[number: {}]", i);
        println!("{}", str);
    }
}
