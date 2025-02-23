import { data } from '../models/api.model.js'
const Data = new data()

const returnAll = async (req, res) => {
  try {
    const ip = await req.ip
    let content = await Data.fetchAll(ip)
    if(content.length === 0){
      return res.json({
        content: 'empty'
      })
    }
    return res.json({
      content
    })
  } catch (e) {
    console.log(e)
    return res.status(500).json({
      status: 500,
      msg: 'something went wrong'
    })
  }
}

const createNtd = async (req, res) => {
  try {
    const { title, content } = await req.body
    const ip = await req.ip
    const data = {
      ip,
      title,
      content 
    }
    let result = await Data.create(data)
    return res.json({
      status: 200,
      msg: 'NTD created successfully'
    })
  } catch (e) {
    console.log(e)
    return res.status(500).json({
      status: 500,
      msg: 'something went wrong'
    })
  }
}

const deleteNtd = async (req, res) => {
  try {
    const { id } = await req.query
    const ip = await req.ip
    
    let result = await Data.deleteNtd(id)
    return res.json({
      status: 200,
      msg: 'NTD deleted successfully'
    })
  } catch (e) {
    console.log(e)
    return res.status(500).json({
      status: 500,
      msg: 'something went wrong'
    })
  }
}

export {
  returnAll,
  createNtd,
  deleteNtd
}