var counter = function (arr) {
  return "There are " + arr.length + " elements in the array.";
};

// module.exports.adder = function (a, b) {
//   return `The sum is ${a + b}`;
// };

var adder = function (a, b) {
  return `The sum is ${a + b}`;
};

var pi = 3.142;

// module.exports.counter = counter;
// module.exports.pi = pi;

module.exports = {
  counter: counter,
  adder: adder,
  pi: pi,
};
