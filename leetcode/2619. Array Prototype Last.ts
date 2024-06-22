interface Array<T> {
  last(): T | -1;
}

Array.prototype.last = function () {
  if (this.length === 0) return -1;

  return this[this.length - 1];
};

let a;
let p4 = new Promise(function (resolve) {
  console.log("TEST A1", a);
  a = 25;

  setTimeout(() => {
    console.log("TEST A2", a);
    resolve(a);
  }, 100);
});

setTimeout(function timeout() {
  a = 10;
  console.log("TEST A3", a);
}, 100);

p4.then(function (b) {
  console.log("TEST A4", a);
});

console.log("TEST A5", a);

// a1 - undefined
// a5 - 25
// a2 25
// a4 - 25
// a3 - 10
