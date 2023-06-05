import { Router } from 'express'
import {
  handleCreateUser,
  handleDeleteUser,
  handleGetUser,
  handleGetUsers,
  handleUpdateUser,
} from './users.controller.js'
import { hasRole, isAuthenticated } from '../../auth/auth.services.js'

const router = Router()

router.get('/', isAuthenticated, hasRole(['ADMIN']), handleGetUsers)

router.get('/:id', isAuthenticated, hasRole(['ADMIN', 'USER']), handleGetUser)

router.post('/', handleCreateUser)

router.patch(
  '/:id',
  isAuthenticated,
  hasRole(['ADMIN', 'USER']),
  handleUpdateUser
)

router.delete(
  '/:id',
  isAuthenticated,
  hasRole(['USER', 'ADMIN']),
  handleDeleteUser
)

export default router
