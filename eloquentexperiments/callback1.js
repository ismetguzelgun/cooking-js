setTimeout(() => console.log("Tick"), 1500);
let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`));
// → Got 15


//import {bigOak} from "./crow-tech";
const { bigOak } = require("./crow-tech");



bigOak.readStorage("food caches",
    caches => {
        let firstCache = caches[0];
        bigOak.readStorage(firstCache, info => {
            console.log(info);
        });
    }
);


function storage(nest, name) {
    return new Promise(resolve => {
        nest.readStorage(name, result => resolve(result));
    });
}

storage(bigOak, "enemies")
    .then(value => console.log("Got", value));