import memory from './memory';

class Array {
	//initializing array
	constructor() {
		//sets initial length to 0 as array is empty
		//use function allocation from memory.js to allocate space based on length
		this.length = 0;
		this._capacity = 0;
		this.ptr = memory.allocate(this.length);
	}
    
	//creating push method
	push(value) {
		//first resizing the array if necessary by multiplying by SIZE_RATIO
		//use function set from memory.js to set the ptr and the value at that ptr
		//increment length by 1
		if (this.length >= this._capacity) {
			this._resize((this.length + 1) * Array.SIZE_RATIO);
		}
		memory.set(this.ptr + this.length, value);
		this.length++;
	}
    
	//resizes the array
	_resize(size) {
		//store the previous ptr as oldPtr
		//use function allocate from memory to create a new ptr based on new size
		//throw error if ptr is null somehow
		//use function copy to move from old position to new position
		//use function free to allow oldPtr to be overwritten
		//reassigning this._capacity to equal size of array
		const oldPtr = this.ptr;
		this.ptr = memory.allocate(size);
        
		if (this.ptr === null) {
			throw new Error('out of memory');
		}
        
		memory.copy(this.ptr, oldPtr, this.length);
		memory.free(oldPtr);
		this._capacity = size;
	}
    
	get(index) {
		if (index < 0 || index >= this.length) {
			throw new Error('index error');
		}

		return memory.get(this.ptr + index);
	}
}

Array.SIZE_RATIO = 3;