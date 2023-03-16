const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {
    handleUserInput(key);
  });

  return stdin;
};

const handleUserInput = function (key) {
  console.log("Handling inputf from terminal");
  if (key === "c") {
    //console.log("Inside if");
    process.exit();
  }
};

module.exports = setupInput;
