const MyQueue = function () {
	this.stack1 = [];
	this.stack2 = [];
};

MyQueue.prototype.push = function (x) {
	this.stack1.push(x);
};

MyQueue.prototype.pop = function () {
	if (this.isEmptyStack(this.stack2)) this.transfer();
	return this.stack2.pop();
};

MyQueue.prototype.peek = function () {
	if (this.isEmptyStack(this.stack2)) this.transfer();
	return this.stack2[this.stack2.length - 1];
};

MyQueue.prototype.empty = function () {
	return this.isEmptyStack(this.stack1) && this.isEmptyStack(this.stack2);
};

// utils

MyQueue.prototype.isEmptyStack = function (stack) {
	return !stack.length;
};

MyQueue.prototype.size = function () {
	return this.stack1.length + this.stack2.length;
};

MyQueue.prototype.transfer = function () {
	while (this.stack1.length > 0) {
		this.stack2.push(this.stack1.pop());
	}
};

const countStudents = function (students, sandwiches) {
	let run = true;
	let count = 0;
	const mQ = new MyQueue();
	const mSt = sandwiches.reverse();

	students.reverse().forEach((elem) => mQ.push(elem));

	while (run) {
		if (count > mQ.size() || mSt.length === 0) {
			run = false;
		}

		let top = mSt.pop();
		let start = mQ.pop();

		if (start === top) {
			count = 0;
		} else {
			mQ.push(start);
			mSt.push(top);
			count += 1;
		}
	}

	return mQ.size();
};
