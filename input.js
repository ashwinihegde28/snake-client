// Stores the active TCP connection object.
let connection;

const setupInput = function (con) {
  connection = con;
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
  if (key === "w") {
    connection.write("Move: up");
  }
  if (key === "a") {
    connection.write("Move: left");
  }
  if (key === "s") {
    connection.write("Move: down");
  }
  if (key === "d") {
    connection.write("Move: right");
  }
};

setupInput();
module.exports = { setupInput };
