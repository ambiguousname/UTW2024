const lib = require("./lib.js");
const fs = require('node:fs');

const wasmRead = fs.readFileSync("./target/wasm32-unknown-unknown/debug/testlib.wasm");

WebAssembly.instantiate(wasmRead).then(
	(wasmModule) => {
		console.log(lib.getSecondCharacter(wasmModule.instance.exports, "Testing"));
		console.log(lib.addition(wasmModule.instance.exports, 1, 10000));
		console.log(lib.useStruct(wasmModule.instance.exports, new lib.PaddingStructExample(0, 0, 50)));
	}
);