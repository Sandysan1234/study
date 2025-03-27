const mysql = require('mysql')
const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "deafr"
})

module.exports = db