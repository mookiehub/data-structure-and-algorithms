// 栈
class Stack {
    constructor() {
        this.arr = [];
    }
    push(item) {
        return this.arr.push(item);
    }
    pop() {
        return this.arr.pop();
    }
}

// 队列
class Queue {
    constructor() {
        this.arr = [];
    }
    push(item) {
        return this.arr.push(item);
    }
    shift() {
        return this.arr.shift();
    }
}
