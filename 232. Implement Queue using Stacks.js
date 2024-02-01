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
