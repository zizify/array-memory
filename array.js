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
    
	//create method to get value stored in array
	get(index) {
		//checks that array index is valid
		if (index < 0 || index >= this.length) {
			throw new Error('index error');
		}

		//use function get to retrieve value at the index location, which it this.ptr + index
		return memory.get(this.ptr + index);
	}
    
	//create method to pop last value off of the array
	pop() {
		//checks that array length is valid
		if (this.length === 0) {
			throw new Error('index error');
		}

		//gets value from memory with get function using the ptr and the length of the array
		//decrements array length
		const value = memory.get(this.ptr + this.length - 1);
		this.length--;
        
		return value;
	}
    
	//creates method to insert a value at a particular index
	insert(index, value) {
		//checks that index is valid
		if (index < 0 || index >= this.length) {
			throw new Error('index error');
		}

		//allocates more space if the length is equal or greater than the capacity
		if (this.length >= this._capacity) {
			this._resize((this.length + 1) * Array.SIZE_RATIO);
		}
        
		//copies data and moves it forward one position
		//sets new value at the index
		//increments length
		memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
		memory.set(this.ptr + index, value);
		this.length++;
	}
    
	//creates method to remove an item at a particular index
	remove(index) {
		//checks that index is valid
		if (index < 0 || index >= this.length) {
			throw new Error('index error');
		}

		//copies data backwards one position to overwrite data starting at the index given
		//decrements length
		memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
		this.length--;
	}
}

Array.SIZE_RATIO = 3;