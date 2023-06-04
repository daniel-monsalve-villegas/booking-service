import mongoose from 'mongoose'

const HotelSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Hotel name is required'],
    },
    type: {
      type: String,
      required: [true, 'Type of place is required'],
    },
    city: {
      type: String,
      required: [true, 'City is required'],
    },
    address: {
      type: String,
      required: [true, 'Address is required'],
    },
    distance: {
      type: String,
      required: [true, 'Distance from state center is required'],
    },
    photos: {
      type: [String],
    },
    title: {
      type: String,
      required: [true, 'Hotel title is required'],
    },
    desc: {
      type: String,
      required: [true, 'Hotel description is required'],
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    rooms: {
      type: [String],
    },
    cheapestPrice: {
      type: Number,
      required: [true, 'The cheapest room is required'],
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const Hotel = mongoose.models.Hotel || mongoose.model('Hotel', HotelSchema)

export default Hotel
