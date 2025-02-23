import db from '../config/db.js'


class data{
  async fetchAll(ip){
    const [result] = await db.execute('SELECT * FROM ntd WHERE ip = ?', [ip])
    return result
  }
  
  async create(data){
    const [result] = await db.execute('INSERT INTO ntd(ip, title, content) VALUES (?, ?, ?)', [data.ip, data.title, data.content])
    return result
  }
  
  async deleteNtd(id){
    const [result] = await db.execute('DELETE FROM ntd WHERE id = ?', [id])
    return result
  }
}


export {
  data
}