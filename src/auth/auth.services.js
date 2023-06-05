import jwt from 'jsonwebtoken'
import config from '../config.js'
import { getUser } from '../api/users/users.services.js'

export const signToken = (payload) => {
  const token = jwt.sign(payload, config.jwtKey, { expiresIn: '10h' })
  return token
}

export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, config.jwtKey)
    return decoded
  } catch (error) {
    return false
  }
}

export const isAuthenticated = async (req, res, next) => {
  const token = req.cookies.access_token
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' })
  }
  const decoded = verifyToken(token)
  if (!decoded) {
    return res.status(401).json({ message: 'Unauthorized' })
  }
  const user = await getUser({ email: decoded.user.email })
  if (!user) {
    return res.status(401).json({ message: 'Unauthorized' })
  }
  req.user = user
  next()
}

export const hasRole = (allowRoles) => {
  return (req, res, next) => {
    const { role } = req.user

    if (!allowRoles.includes(role)) {
      return res.status(403).json({ message: 'Forbidden' })
    }
    next()
  }
}
