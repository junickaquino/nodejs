/*
    A function that calls whatever function inputted as the parameter.
*/

function callFunction(fun) {
  fun();
}

const sayBye = function () {
  console.log("Bye");
};

callFunction(sayBye);
