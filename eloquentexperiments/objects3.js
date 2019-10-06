let todoList = [];
function remember(task) {
  todoList.push(task);
}
function getTask() {
  return todoList.shift();
}
function rememberUrgently(task) {
  todoList.unshift(task);
}

function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
      if (number > result) result = number;
    }
    return result;
  };
let numbers = [5, 1, 7];
console.log(max(...numbers));

let words = ["never", "fully"];
console.log(["will", ...words, "understand"]);