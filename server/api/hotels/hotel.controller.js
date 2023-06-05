import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from './hotels.services.js'

export const handleGetHotels = async (req, res) => {
  try {
    const hotels = await getHotels()
    return res.status(200).json(hotels)
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const handleGetHotel = async (req, res) => {
  const { id } = req.params

  try {
    const hotel = await getHotel(id)
    if (!hotel) {
      return res.status(404).json({ message: 'Hotel not found' })
    }
    return res.status(200).json(hotel)
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const handleCreateHotel = async (req, res) => {
  const data = req.body
  try {
    const hotel = await createHotel(data)
    return res.status(201).json(hotel)
  } catch (error) {
    return res.status(500).json(error.message)
  }
}

export const handleUpdateHotel = async (hotelId, req, res) => {
  const { id } = req.params
  const data = req.body

  try {
    const hotel = await updateHotel(id, data)

    if (!hotel) {
      return res.status(404).json({ message: 'Hotel not found' })
    }
    return res.status(200).json(hotel)
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const handleDeleteHotel = async (req, res) => {
  const { id } = req.params

  try {
    deleteHotel(id)
    return res.status(200).json({ message: 'Hotel deleted' })
  } catch (error) {
    return res.status(500).json(error.message)
  }
}
