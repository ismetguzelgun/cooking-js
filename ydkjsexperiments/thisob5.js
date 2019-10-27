function foo() {
    console.log(this.a);
}
var obj = {
    a: 2
};
var bar = function () {
    foo.call(obj);
}
bar(); // 2
setTimeout(bar, 100); // 2
// hard-bound `bar` can no longer have its `this` overridden
//bar.call(window); // 2