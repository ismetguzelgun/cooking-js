/*Since each function has its own this binding, whose value depends on the way it is called, 
you cannot refer to the this of the wrapping scope in a regular function defined with the function keyword.*/
/*
Arrow functions are different—they do not bind their own this but can see the this binding of the scope around them. 
Thus, you can do something like the following code, which references this from inside a local function*/

function normalize() {
    console.log(this.coords.map(n => n / this.length));
}
normalize.call({ coords: [0, 2, 3], length: 5 });

function normalize2() {
    console.log(this.coords.map(function ff(n){n / this.length;}));
}
normalize2.call({ coords: [0, 2, 3], length: 5 });


function normalize3() {
    console.log(this.coords.map(n => n / this.length));
}
let deneme={ coords: [0, 2, 3], length: 5 };
normalize3.call(deneme);