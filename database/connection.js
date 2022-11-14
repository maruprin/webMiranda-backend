require('dotenv').config()
const mysql = require('mysql2')
const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE, MYSQL_SALT } =
  process.env;

const connection = mysql.createConnection({
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
});

connection.connect((err) => {
  if (err) {
    console.error(err);
    return console.error("ERROR: " + err.message);
  }
  console.log("Connected to the MySQL server");
});

function dbQuery(query, params) {
  return new Promise((resolve, reject) => {
    connection.query(query, params, (error, results) => {
      if (error) reject(error);
      resolve(results);
    });
  });
}

module.exports = {
    dbQuery,
    connection
}
