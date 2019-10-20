/**
 * not exactly a closure
 * 
 */
function foo() {
    var a = 2;
    function bar() {
        console.log(a); // 2
    }
    bar();
}
foo();


function foo() {
    var a = 2;
    function bar() {
        console.log(a);
    }
    return bar;
}
var baz = foo();


function wait(message) {
    setTimeout(function timer() {
        console.log(message);
    }, 1000);
}
wait("Hello, closure!");


//deneme
function wait2(message) {
    return function timer(say) {
        console.log(message + say);
    };
}
let sayn = wait2("Hello, closure!");
sayn("tarator");




console.log(typeof sayn);