import express from 'express'
import { fetchAll } from '../controllers/controller.js'

const router = express.Router()

router.get('/all', fetchAll)

export default router