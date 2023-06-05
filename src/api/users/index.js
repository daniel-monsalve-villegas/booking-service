import { Router } from 'express'
import {
  handleCreateUser,
  handleDeleteUser,
  handleListUsers,
  handleLoadUser,
  handleUpdateUser,
} from './users.controller.js'

const router = Router()

router.get('/', handleListUsers)

router.get('/:id', handleLoadUser)

router.post('/', handleCreateUser)

router.patch('/:id', handleUpdateUser)

router.delete('/:id', handleDeleteUser)

export default router
