import express from 'express';

import { login, signup } from '../controllers/auth.js'
import { create, deleteData, getAll, getOne, update } from '../controllers/data.js';

const router = express.Router();

router.post('/signup', signup)
router.post('/login', login)

router.post('/create', create)
router.get('/getall', getAll)
router.get('/getone/:id', getOne)
router.put('/update/:id', update)
router.delete('/delete/:id', deleteData)

export default router