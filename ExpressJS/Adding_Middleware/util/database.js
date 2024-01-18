const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node_complete',
    password: 'TndTndTnd@18121278'
})


module.exports = pool.promise();