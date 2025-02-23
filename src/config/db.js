import mysql2 from 'mysql2/promise'

const config = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'test'
}

const db = mysql2.createPool(config)

export default db