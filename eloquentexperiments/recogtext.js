let roseDragon = "🌹🐉";
function rectec (array,action){
for (let char of array) {
  action(char);
}
};

rectec(roseDragon,console.log);