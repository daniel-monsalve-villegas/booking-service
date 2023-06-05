import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      unique: true,
    },
    lastName: {
      type: String,
      required: [true, 'Last Name is required'],
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'prefer not to say'],
      required: [true, 'Gender is required'],
    },
    birth: {
      type: Date,
      required: [true, 'Birth date is required'],
    },
    document: {
      type: String,
      enum: ['DNI', 'Passport'],
      required: [true, 'Document is required'],
    },
    documentNumber: {
      type: Number,
      required: [true, 'Number document is required'],
    },
    phoneNumber: {
      type: Number,
      required: [true, 'Phone number is required'],
    },
    email: {
      type: String,
      required: [true, 'Email of place is required'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    role: {
      type: String,
      enum: ['ADMIN', 'USER'],
      default: 'USER',
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
