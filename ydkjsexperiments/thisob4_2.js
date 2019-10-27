
//Because obj is the this for the foo() call, this.a is synonymous with obj.a
function foo() {
    console.log(this.a);
}
var obj = {
    a: 2,
    foo: foo
};
obj.foo(); // 2

function foo() {
    console.log(this.a);
}
var obj2 = {
    a: 42,
    foo: foo
};
var obj1 = {
    a: 2,
    obj2: obj2
};

obj1.obj2.foo(); // 42

//obj1.foo(); // 42