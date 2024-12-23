import appwrite from '../../config/write.js'
import { ID } from 'node-appwrite'

export const createUser = async (req, res) => {
  try {
    const user = await appwrite.users.create(
      ID.unique(),
      req.body.email,
      '+123456789',
      req.body.password,
      req.body.name,
    )
    console.log(user)
    res.json(user)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}
