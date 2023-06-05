import Room from './rooms.model.js'
import Hotel from '../hotels/hotels.model.js'

export const getRooms = async () => {
  return Room.find()
}

export const getRoom = async (id) => {
  const room = Room.findById(id)
  return room
}

export const createRoom = async (hotelId, room) => {
  const newRoom = await Room.create(room)
  try {
    await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: newRoom.id } })
  } catch (error) {
    throw new Error(error)
  }
  return room
}

export const updateRoom = async (id, room) => {
  const updateRoom = Room.findByIdAndUpdate(id, room, { new: true })
  return updateRoom
}

export const deleteRoom = async (hotelId, id) => {
  const deleteRoom = Room.findByIdAndDelete(id)
  try {
    await Hotel.findByIdAndUpdate(hotelId, { $pull: { rooms: id } })
  } catch (error) {
    throw new Error(error)
  }
  return deleteRoom
}
