Object.assign(Array.prototype, {
    square() {
        return this.map((item) => Math.pow(item, 2));
    },
    cube() {
        return this.map((item) => Math.pow(item, 3));
    },
    average() {
        return this.sum() / this.length;
    },
    sum() {
        return this.reduce((acc, item) => (acc += item), 0);
    },
    even() {
        return this.filter((item) => item % 2 === 0);
    },
    odd() {
       return this.filter((item) => item % 2 !== 0);
    },
});
