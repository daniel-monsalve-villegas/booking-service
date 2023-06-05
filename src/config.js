import dotenv from 'dotenv'

dotenv.config()

const config = {
  port: process.env.PORT,
  mongoDB: process.env.MONGO_DB_URI,
  jwtKey: process.env.JWT_KEY,
}

export default config
