import mysql2 from 'mysql2/promise'
import dotenv from 'dotenv'
dotenv.config()

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
}

const db = mysql2.createPool(config)

export default db