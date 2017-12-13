// The word's worst allocator
let memory = new Float64Array(1024);
let head = 0;

let allocate = function(size) {
	if (head + size > memory.length) {
		return null;
	}
	let start = head;
	head += size;
	return start;
};

let free = function(ptr) {
};

let copy = function(to, from, size) {
	if (from === to) {
		return;
	}
	else if (from > to) {
		// Iterate forwards
		for (let i=0; i<size; i++) {
			set(to + i, get(from + i));
		}
	}
	else {
		// Iterate backwards
		for (let i=size - 1; i>=0; i--) {
			set(to + i, get(from + i));
		}
	}
};

let get = function(ptr) {
	return memory[ptr];
};

let set = function(ptr, value) {
	memory[ptr] = value;
};

exports.allocate = allocate;
exports.free = free;
exports.copy = copy;
exports.get = get;
exports.set = set;
