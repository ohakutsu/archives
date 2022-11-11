#include "c_with_rust.h"
#include <stdio.h>

int main() {
  int x = 3;
  int y = 2;

  printf("add: %d\n", add(x, y));
  printf("sub: %d\n", sub(x, y));

  return 0;
}
