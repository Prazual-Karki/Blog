import mysql from 'mysql'

export const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '*MySql1248#',
  database: 'blog',
})
