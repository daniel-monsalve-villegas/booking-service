import mongoose from 'mongoose'

const RoomSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
    },
    maxPeople: {
      type: Number,
      required: [true, 'Maximum people is required'],
    },
    desc: {
      type: String,
      required: [true, 'Description is required'],
    },
    roomNumbers: [{}],
  },
  {
    timestamps: true,
    vresionKey: false,
  }
)

const Room = mongoose.models.Room || mongoose.model('Room', RoomSchema)

export default Room
