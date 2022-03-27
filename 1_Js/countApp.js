// const counter = require("./count");
// const sayBye = require("./count");

// import { counter, sayBye } from "./count";

// const { counter, sayBye } = require("./count");      --- This didn't worked first since in count.js it was [] instead of {}.

// var myFunctions = require("./count");        --- This also worked!
/*
console.log(myFunctions.counter([1, 2, 3, 4, 5]));
myFunctions.sayBye();
*/

const { counter, sayBye } = require("./count");

console.log(counter([1, 2, 3, 4, 5]));
sayBye();
