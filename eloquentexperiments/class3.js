let ages = {
    Boris: 39,
    Liang: 22,
    Júlia: 62
  };
  
  console.log(`Júlia is ${ages["Júlia"]}`);
  // → Júlia is 62
  console.log("Is Jack's age known?", "Jack" in ages);
  // → Is Jack's age known? false
  console.log("Is toString's age known?", "toString" in ages);
  // → Is toString's age known? true

  console.log("toString" in Object.create(null));
// → false

let ages2 = new Map();
ages2.set("Boris", 39);
ages2.set("Liang", 22);
ages2.set("Júlia", 62);
//

console.log("toString" in Object.create(null));
// → false
console.log("h");
console.log("h:","toString" in Object.create(ages));
// → true

//
console.log(`Júlia is ${ages2.get("Júlia")}`);
// → Júlia is 62
console.log("Is Jack's age known?", ages2.has("Jack"));
// → Is Jack's age known? false
console.log(ages2.has("toString"));
// → false

//as alternative to "in",hasOwnProperty, which ignores the object’s prototype.
console.log({x: 1}.hasOwnProperty("x"));
// → true
console.log({x: 1}.hasOwnProperty("toString"));
// → false