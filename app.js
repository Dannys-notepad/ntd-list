import express from 'express'
import crypto from 'crypto'
import mainRoute from './src/routes/main.route.js'
import {user} from './src/models/model.js'

const User = new user()
const app = express()
const PORT = process.env.PORT || 8000

app.set('view engine', 'ejs')

/*app.use(async (req, res, next) => {
  try {
    const ip = await req.ip
    let data = {
      ip,
      uid: crypto.randomBytes(3)
    }
    let result = await User.check(data.ip)
    if(!result){
      result = await User.create(data)
    }
    next()
  } catch (e) {
    console.log(e)
    return res.render('error')
  }
})*/
app.use(express.json())
app.use(express.urlencoded({ extended:false }))
app.use('/', mainRoute)
app.use('/api/v1/cta', mainRoute)

app.listen(PORT, () => {
  console.log(`server up and running on port ${PORT}`)
})