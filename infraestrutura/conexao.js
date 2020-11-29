const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'new-strong-password',
    database: 'agenda-petshop'
})

module.exports = conexao