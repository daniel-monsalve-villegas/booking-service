import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
} from './rooms.services.js'

export const handleGetRooms = async (req, res) => {
  try {
    const rooms = await getRooms()
    return res.status(200).json(rooms)
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const handleGetRoom = async (req, res) => {
  const { id } = req.params

  try {
    const room = await getRoom(id)
    if (!room) {
      return res.status(404).json({ message: 'Room not found' })
    }
    return res.status(200).json(room)
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const handleCreateRoom = async (req, res) => {
  const hotelId = req.params.hotelid
  const data = req.body
  try {
    const room = await createRoom(hotelId, data)
    return res.status(201).json(room)
  } catch (error) {
    return res.status(500).json(error.message)
  }
}

export const handleUpdateRoom = async (req, res) => {
  const { id } = req.params
  const data = req.body

  try {
    const room = await updateRoom(id, data)

    if (!room) {
      return res.status(404).json({ message: 'Room not found' })
    }
    return res.status(200).json(room)
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const handleDeleteRoom = async (req, res) => {
  const hotelId = req.params.hotelid
  const id = req.params.id

  try {
    await deleteRoom(hotelId, id)
    return res.status(200).json({ message: 'Room deleted' })
  } catch (error) {
    return res.status(500).json(error.message)
  }
}
