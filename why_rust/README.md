# why_rust

## memory_leak

```
$ gcc -Wall -Wpedantic -std=c99 -o memory_leak memory_leak.c
$ ./memory_leak > /dev/null
Killed
$ tail -n 10 /var/log/syslog
... Out of memory: Killed process 2384 (memory_leak) ...

$ rustc memory_leak.rs
$ ./memory_leak > /dev/null
```

## buffer_overrun

```
$ gcc -Wall -Wpedantic -std=c99 -o buffer_overrun buffer_overrun.c
$ ./buffer_overrun > /dev/null

$ rustc buffer_overrun.rs
$ ./buffer_overrun > /dev/null
thread 'main' panicked at 'index out of bounds: the len is 16 but the index is 16', buffer_overrun.rs:7:9
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
```
