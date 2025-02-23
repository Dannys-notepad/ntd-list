import db from '../config/db.js'

class user{
  async create(data){
    const [result] = await db.execute('INSERT INTO users(uid, ip) VALUES (?, ?)', [data.uid, data.ip])
    return result.insertId
  }
  
  async check(ip){
    const [result] = await db.execute('SELECT * FROM users where ip = ?', [ip])
    return result[0]
  }
}

export {
  user
}