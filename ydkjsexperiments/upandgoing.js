a = 21;
b = a * 2;
console.log( b );
//console is a object reference

//"." is a object property access

let num=99;
let num2="99";
let comp= num==num2?1:0;
let comp2= num===num2?1:0;
console.log(comp);
console.log(comp2);

const TAX_RATE=0.88;

let amount=99.99;

let din=amount+(amount*TAX_RATE);

console.log(din);

//TAX_RATE=0.77;


let din2=amount+(amount*TAX_RATE);

console.log(din2);

//null bug
var a = null;
console.log(typeof a);


function foo() {
    return 42;
    }
    foo.deneme = "hello world";
    console.log(typeof foo);
        console.log(typeof foo());
        console.log(typeof foo.deneme);



        
    // "function"
    // "number"
    // "string"