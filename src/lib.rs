use std::ffi::CStr;
use std::os::raw::c_char;

#[no_mangle]
pub extern "C" fn get_second_character(string : *const c_char) -> c_char {
	let string_val : &str = unsafe { CStr::from_ptr(string) }.to_str().unwrap();

	string_val.chars().nth(1).unwrap() as i8
}

#[no_mangle]
pub extern "C" fn addition(a : i8, b : i8) -> i8 {
	a + b
}

#[repr(C)]
pub struct PaddingStructExample {
	some : i32,
	other : i8,
	test : i16
}

#[no_mangle]
pub extern "C" fn use_struct(s : PaddingStructExample) -> i16 {
	s.test
}

#[repr(C)]
pub struct ReturnStruct {
	i : i32,
	j : i32,
	k : i32
}

#[no_mangle]
pub extern "C" fn get_struct() -> ReturnStruct {
	ReturnStruct { i: 42, j: 1, k: 102 }
}