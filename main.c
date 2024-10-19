#include "lib.h"
#include <stdio.h>

int main() {
	printf("%c\n", get_second_character("Test"));

	printf("%i\n", addition(1, 5));

	struct PaddingStructExample a = {0, 5, 10};
	printf("%i", use_struct(a));

	printf("%i", get_struct().i);
	return 0;
}