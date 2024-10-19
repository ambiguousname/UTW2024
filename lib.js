// (func $get_second_character (param i32) (result i32))
// Assumes the given string is all ASCII characters, for simplicity of conversion.
function getSecondCharacter(wasmModule, string) {
	const memory = new DataView(wasmModule.memory.buffer);
	for (var i = 0; i < string.length; i++) {
		let codepoint = string[i].codePointAt(0);
		memory.setUint8(i, codepoint, true);
	}

	return new TextDecoder('utf-8').decode(new Uint8Array([wasmModule.get_second_character(0)]));
}

// (func $addition (param i32 i32) (result i32)) 
function addition(wasmModule, a, b) {
	return wasmModule.addition(a, b);
}

class PaddingStructExample {
	constructor(s, o, t) {
		this.some = s;
		this.other = o;
		this.test = t;
	}
}

function useStruct(wasmModule, struct) {
	return wasmModule.use_struct(struct.some, struct.other, 0, struct.test);
}

class ReturnStruct {
	constructor(i, j, k) {
		this.i = i;
		this.j = j;
		this.k = k;
	}
}

function getStruct(wasmModule) {
	const structBuffer = new DataView(wasmModule.memory.buffer, 0, 12);

	wasmModule.get_struct(structBuffer);

	let i = structBuffer.getInt32(0, true);
	let j = structBuffer.getInt32(4, true);
	let k = structBuffer.getInt32(8, true);
	return new ReturnStruct(i, j, k);
}

module.exports = { getSecondCharacter, addition, PaddingStructExample, useStruct, getStruct }