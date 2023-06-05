import { Router } from 'express'
import {
  handleCreateHotel,
  handleDeleteHotel,
  handleGetHotel,
  handleGetHotels,
  handleUpdateHotel,
} from './hotel.controller.js'
import { hasRole, isAuthenticated } from '../../auth/auth.services.js'
import { countByCity } from './hotels.services.js'

const router = Router()

router.get('/', handleGetHotels)

router.get('/countByCity', countByCity)

router.get('/find/:id', handleGetHotel)

router.post('/', isAuthenticated, hasRole(['ADMIN']), handleCreateHotel)

router.patch(
  '/find/:id',
  isAuthenticated,
  hasRole(['ADMIN']),
  handleUpdateHotel
)

router.delete(
  '/find/:id',
  isAuthenticated,
  hasRole(['ADMIN']),
  handleDeleteHotel
)

export default router
