
//check object had properties
let object1={
    x:0,
    y:3,
    z:2
};

console.log(Object.keys(object1));

//object assign function copies properties of an object to another
Object.assign(object1,{a:7,x:3});
console.log(object1);

//jacques objects
let journal = [
    {events: ["work", "touched tree", "pizza",
              "running", "television"],
     squirrel: false},
    {events: ["work", "ice cream", "cauliflower",
              "lasagna", "touched tree", "brushed teeth"],
     squirrel: false},
    {events: ["weekend", "cycling", "break", "peanuts",
              "beer"],
     squirrel: true},
    /* and so on... */
  ];

  console.log(typeof journal);
  console.log(journal);
  console.log("journal 0 element:",journal[0]);

  const score = {visitors: 0, home: 0};
  // This is okay
  score.visitors = 1;
  // This isn't allowed
  score = {visitors: 1, home: 1};  