#ifndef __LIB_H__
#define __LIB_H__
#include <stdint.h>
// Conversion. Must always write additional definitions.

// Representation. 
// In Rust, this is the difference between c_char and char.
// In JS/WASM, strings must be converted to and from binary form.
char get_second_character(const char* str);

// Typing differences.
// In C, this can be something small like i32 vs. int32_t
// In JS, this is something like the fact that enums are not natively supported.
int8_t addition(int8_t a, int8_t b);

struct PaddingStructExample {
	int32_t some;
	int8_t other;
	int16_t test;
};

int8_t use_struct(struct PaddingStructExample);

#endif