import { data } from '../models/api.model.js'
const Data = new data()

const returnAll = async (req, res) => {
  try {
    const ip = await req.ip
    let result = await Data.fetchAll()
    res.json({
      status: 200,
      content: result ?? 'empty'
    })
  } catch (e) {
    console.log(e)
    return res.status(500).json({
      status: 500,
      msg: 'something went wrong'
    })
  }
}

const l = async (req, res) => {
  try {
    const ip = await req.ip
    let result = await Data.fetchAll()
  } catch (e) {
    return res.status(500).render('error')
  }
}

export {
  fetchAll
}