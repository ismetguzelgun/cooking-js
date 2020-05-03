//a function inside a function that relies on variables in the outside function to work.
//style.cssText

// function doSomeMath(){
//     var a=5;
//     var b=4;

//     function multiply(){
//         var result =a*b;
//         return result;
//     }
// }

function giveMeEms(pixels){
    var baseValue=16;

    function doSomeMath(){
        return pixels/baseValue;
    }
    return doSomeMath;
}

var smallSize=giveMeEms(16);

console.log(smallSize);

console.log(smallSize());

function ggEz(x){
    return (y)=> x/y;
};

let xVal=ggEz(5);
console.log(xVal(2));