import express from 'express'
import { returnAll, createNtd, deleteNtd } from '../controllers/api.controller.js'

const router = express.Router()

router.get('/all', returnAll)
router.post('/create', createNtd)
router.delete('/delete', deleteNtd)

export default router