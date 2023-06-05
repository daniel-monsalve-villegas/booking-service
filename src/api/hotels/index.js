import { Router } from 'express'
import {
  handleCreateHotel,
  handleDeleteHotel,
  handleGetHotel,
  handleGetHotels,
  handleUpdateHotel,
} from './hotel.controller.js'
import { hasRole, isAuthenticated } from '../../auth/auth.services.js'

const router = Router()

router.get('/', handleGetHotels)

router.get('/:id', handleGetHotel)

router.post('/', isAuthenticated, hasRole(['ADMIN']), handleCreateHotel)

router.patch('/:id', isAuthenticated, hasRole(['ADMIN']), handleUpdateHotel)

router.delete('/:id', isAuthenticated, hasRole(['ADMIN']), handleDeleteHotel)

export default router
