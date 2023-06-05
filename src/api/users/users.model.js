import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Hotel name is required'],
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'Type of place is required'],
    },
    password: {
      type: String,
      required: [true, 'City is required'],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

UserSchema.path('email').validate(async (email) => {
  const user = await User.findOne({ email })
  if (user) {
    return false
  }
  return true
}, 'Email is already taken')

UserSchema.pre('save', async function (next) {
  const user = this

  try {
    if (!user.isModified('password')) {
      return next()
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(user.password, salt)

    user.password = hash
  } catch (error) {
    next(error)
  }
})

UserSchema.methods.comparePassword = async function comparePwd(password, next) {
  const user = this

  try {
    const isMatch = await bcrypt.compare(password, user.password)
    return isMatch
  } catch (error) {
    next(error)
  }
}

const User = mongoose.models.User || mongoose.model('User', UserSchema)

export default User
