import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from './users.services.js'

export const handleGetUsers = async (req, res) => {
  try {
    const users = await getUsers()
    return res.status(200).json(users)
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const handleGetUser = async (req, res) => {
  const { id } = req.params
  try {
    const user = await getUserById(id)
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    return res.status(200).json(user)
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const handleCreateUser = async (req, res) => {
  const data = req.body
  try {
    const user = await createUser(data)
    return res.status(201).json(user)
  } catch (error) {
    return res.status(500).json(error.message)
  }
}

export const handleUpdateUser = async (req, res) => {
  const { id } = req.params
  const data = req.body

  const user = await updateUser(id, data)
  if (!user) {
    return res.status(404).json({ message: 'User not found' })
  }
  return res.status(200).json(user)
}

export const handleDeleteUser = async (req, res) => {
  const { id } = req.params
  try {
    await deleteUser(id)
    return res.status(200).json({ message: 'User deleted' })
  } catch (error) {
    return res.status(500).json(error.message)
  }
}
