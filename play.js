const net = require("net");
const { connect } = require("./client");

const connection = connect();

/* // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", (client) => {
    // code that does something when the connection is first established
    console.log("Successfully connected to game server");
    conn.write("Name: ABC");
  });
  return conn;
};*/

console.log("Connecting ...");
connect();
