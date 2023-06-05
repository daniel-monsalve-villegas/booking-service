import { Router } from 'express'
import { handleLoginUser } from './auth.controller.js'

const router = Router()

router.post('/login', handleLoginUser)

export default router
