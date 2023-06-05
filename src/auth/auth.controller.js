import jwt from 'jsonwebtoken'
import { getUser } from '../api/users/users.services.js'

export const handleLoginUser = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await getUser({ email })
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    const validPassword = await user.comparePassword(password)
    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY
    )
    return res
      .cookie('access_token', token, { httpOnly: true })
      .status(200)
      .json({ user, token })
  } catch (error) {
    return res.status(500).json(error.message)
  }
}
