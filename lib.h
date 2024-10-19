#ifndef __LIB_H__
#define __LIB_H__
#include <stdint.h>

char get_second_character(const char* str);

int8_t addition(int8_t a, int8_t b);

struct PaddingStructExample {
	int32_t some;
	int8_t other;
	int16_t test;
};

int8_t use_struct(struct PaddingStructExample);

struct ReturnStruct {
	int32_t i;
	int32_t j;
	int32_t k;
};

struct ReturnStruct get_struct();

#endif