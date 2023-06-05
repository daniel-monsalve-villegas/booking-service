import { Router } from 'express'
import { hasRole, isAuthenticated } from '../../auth/auth.services.js'
import {
  handleCreateRoom,
  handleDeleteRoom,
  handleGetRoom,
  handleGetRooms,
  handleUpdateRoom,
} from './rooms.controller.js'

const router = Router()

router.get('/', handleGetRooms)

router.get('/:id', handleGetRoom)

router.post('/:hotelid', isAuthenticated, hasRole(['ADMIN']), handleCreateRoom)

router.patch('/:id', isAuthenticated, hasRole(['ADMIN']), handleUpdateRoom)

router.delete(
  '/:id/:hotelid',
  isAuthenticated,
  hasRole(['ADMIN']),
  handleDeleteRoom
)

export default router
