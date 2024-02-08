// with storage {}
function Stack() {
	this._size = 0;
	this._storage = {};
}

Stack.prototype.push = function (data) {
	this._storage[this._size] = data;
	this._size += 1;
};

Stack.prototype.pop = function () {
	const size = this._size;
	if (size === 0) return null;
	const data = this._storage[size - 1];
	delete this._storage[size - 1];
	this._size--;
	return data;
};

Stack.prototype.empty = function () {
	return !!this._size;
};

const testStack = new Stack();


// with two arr
function StackArr() {
	this._stack1 = [];
	this._stack2 = [];
}

StackArr.prototype.push = function (data) {
	this._stack1.push(data);
};

StackArr.prototype.pop = function () {
	if (this.isEmpty(this._stack2)) this.transfer();
	return this._stack2.pop();
};

StackArr.prototype.transfer = function () {
	if (StackArr.isEmpty(this._stack2)) {
		while (this._stack2 < this._stack1) {
			this._stack2.push(this._stack1.pop());
		}
	}
};

StackArr.prototype.isEmpty = function (stack) {
	return !!stack.length;
};
