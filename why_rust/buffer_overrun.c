#include <stdio.h>

#define BUF_SIZE 16

int main() {
  int buf[BUF_SIZE];

  for (int i = 0; i < BUF_SIZE + 2; i++) {
    buf[i] = i;
    printf("buf[%d]: %d\n", i, buf[i]);
  }

  return 0;
}
