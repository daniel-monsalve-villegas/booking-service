import { Router } from 'express'
import {
  handleCreateHotel,
  handleDeleteHotel,
  handleGetHotel,
  handleGetHotels,
  handleUpdateHotel,
} from './hotel.controller.js'

const router = Router()

router.get('/', handleGetHotels)

router.get('/:id', handleGetHotel)

router.post('/', handleCreateHotel)

router.patch('/:id', handleUpdateHotel)

router.delete('/:id', handleDeleteHotel)

export default router
