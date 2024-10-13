main:
	cargo build
	cc main.c -o target/debug/main -L target/debug/ -ltestlib

/target/wasm32-unknown-unknown/testlib.wasm:
	cargo build --target wasm32-unknown-unknown

all: main /target/wasm32-unknown-unknown/testlib.wasm