import Hotel from './hotels.model.js'

export const getHotels = async () => {
  return Hotel.find()
}

export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(',')

  try {
    const list = await Promise.all(
      cities.map((city) => Hotel.countDocuments({ city: city }))
    )
    res.status(200).json(list)
  } catch (error) {
    next(error)
  }
}

export const getHotel = async (id) => {
  const hotel = Hotel.findById(id)
  return hotel
}

export const createHotel = async (hotel) => {
  return Hotel.create(hotel)
}

export const updateHotel = async (id, hotel) => {
  const updateHotel = Hotel.findByIdAndUpdate(id, hotel, { new: true })
  return updateHotel
}

export const deleteHotel = async (id) => {
  const deleteHotel = Hotel.findByIdAndDelete(id)
  return deleteHotel
}
