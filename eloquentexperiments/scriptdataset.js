require('./script.js');

//filter
function filter(array, test) {
    let passed = [];
    for (let element of array) {
      if (test(element)) {
        passed.push(element);
      }
    }
    return passed;
  };
  
  console.log(filter(SCRIPTS, script => script.living));
  // → [{name: "Adlam", …}, …]
  //map
  function map(array, transform) {
    let mapped = [];
    for (let element of array) {
      mapped.push(transform(element));
    }
    return mapped;
  }
  
  let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
  console.log(map(rtlScripts, s => s.name));  
//same job
console.log(map(rtlScripts, function deneme(x){return x.name;}));  
  
//reduce2
function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
      return count + (to - from);
    }, 0);
  }
  
  console.log(SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
  }));