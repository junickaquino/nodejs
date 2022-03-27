var counter = function (arr) {
  return "There are " + arr.length + " elements in this array.";
};

const sayBye = () => {
  console.log("Bye");
};

// module.exports = [counter, sayBye];   --- ALMOST worked. Just needs to replayed [] to {}

// export function counter(arr);
// export function sayBye();

// exports.counter = function (arr) {};
// exports.sayBye = function () {};

module.exports = {
  counter,
  sayBye,
};
