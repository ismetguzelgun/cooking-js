console.log("The future says:", future());
function future() {
return "You'll never have flying cars";
}

const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
    result *= base;
    }
    return result;
    };
console.log(power(2,5));    

const fut= ()=> {
    return "iput";
    };
    console.log(fut());    