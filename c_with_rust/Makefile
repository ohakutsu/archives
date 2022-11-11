CC=gcc
CFLAGS=-Wall -ansi -Wpedantic
TARGET=main

all: $(TARGET)

$(TARGET): main.o target/debug/c_with_rust.dylib
	$(CC) $(CFLAGS) main.o -L./target/debug -lc_with_rust -o main

main.o: main.c
	$(CC) $(CFLAGS) -c main.c

target/debug/c_with_rust.dylib: src/*.rs
	cargo build

clean:
	rm -f *.o *~ $(TARGET)

format:
	clang-format --style=llvm -i *.c *.h
	cargo fmt

.PHONY: clean format
