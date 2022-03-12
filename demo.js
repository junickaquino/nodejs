var fs = require("fs");

var data = {
  name: "Bobby",
};

fs.writeFile("data.json", JSON.stringify(data), (err) => {
  if (err) {
    console.log("Error!");
  } else {
    console.log("Write file success!");
  }
});
