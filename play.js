const net = require("net");
const { connect } = require("./client");
const { setupInput } = require("./input");

const connection = connect();

/* // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", (client) => {
    // code that does something when the connection is first established
    console.log("Successfully connected to game server");
    conn.write("Name: ABC");
  });
  return conn;
};

// setup interface to handle user input from stdin

connection.on("data", (data) => {
  console.log(data);
});*/

console.log("Connecting ...");
connect();
setupInput(connection);

module.exports = { connect };
