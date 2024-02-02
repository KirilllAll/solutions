// two stacks
{
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

	MyQueue.prototype.transfer = function () {
		while (this.stack1.length > 0) {
			this.stack2.push(this.stack1.pop());
		}
	};
}

// one stack 
const MyQueue = function () {
	this.stack = [];
};

MyQueue.prototype.push = function (x) {
	this.stack.push(x);
};

MyQueue.prototype.pop = function () {
	// что делает .shift?
	// предполагается, что у стека есть доступ только к верхнему элементу, так что решение будет чуть сложнее. Надо использовать несколько стеков, см название задачи.
	return this.stack.shift();
};

MyQueue.prototype.peek = function () {
	return this.stack[0];
};

MyQueue.prototype.empty = function () {
	return !this.stack.length;
};

/*
Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false
*/
