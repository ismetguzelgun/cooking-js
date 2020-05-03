// function findBiggestFraction(a,b){
//     a>b?console.log("a:",a):console.log("b: ",b);
//     console.log("function runnin");
// }

function findBiggestFraction(a,b){
    var result;
    a>b?result=["firstFrac",a]:result=["secFrac",b];
    return result;
}



var a=3/4;
var b=5/7;


console.log(findBiggestFraction(a,b).join(": "));

