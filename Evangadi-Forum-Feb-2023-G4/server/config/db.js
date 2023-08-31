import mysql from "mysql2";
// const port = process.env.DB_PORT;
// const host = process.env.DB_HOST;
// const database = process.env.DB_NAME;
// const user = process.env.DB_USER;
// const password = process.env.DB_PASSWORD;
// console.log(port);

const port = 3306;
const host = "localhost";
const database = "Evangadi";
const user = "root";
const password = "@Mariam21";
// console.log(port);

export const connection = mysql.createConnection({
  host,
  port,
  database,
  user,
  password,
  // socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
});

connection.connect((error) => {
  if (error) console.log(error);
  console.log("Connected to the database as ID: " + connection.threadId);
});
