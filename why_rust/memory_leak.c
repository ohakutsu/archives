#include <stdio.h>
#include <stdlib.h>

#define STR_BUF_SIZE 100000000

char *str_new() { return calloc(STR_BUF_SIZE, sizeof(char)); }

int main() {
  for (int i = 0; i < 100000000; i++) {
    char *str = str_new();
    snprintf(str, sizeof(str) * STR_BUF_SIZE, "[number: %d]", i);

    printf("%s\n", str);
  }

  return 0;
}
