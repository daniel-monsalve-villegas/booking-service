import User from './users.model.js'

export const getUsers = async () => {
  return User.find({}, { password: 0 })
}

export const getUserById = async (id) => {
  const user = User.findById(id, { password: 0 })
  return user
}

export const getUser = async (filter) => {
  const user = User.findOne(filter)
  return user
}

export const createUser = async (user) => {
  return User.create(user)
}

export const updateUser = async (id, user) => {
  const updateProfile = User.findByIdAndUpdate(id, user, { new: true })
  return updateProfile
}

export const deleteUser = async (id) => {
  const deleteUser = User.findByIdAndDelete(id)
  return deleteUser
}
