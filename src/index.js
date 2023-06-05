import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import routes from './routes.js'
import cookieParser from 'cookie-parser'
import config from './config.js'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cookieParser())

const connect = async () => {
  try {
    await mongoose.connect(config.mongoDB)
  } catch (error) {
    throw error
  }
}

mongoose.connection.on('diconnected', () => {
  console.log('mongoDB disconnected')
})

mongoose.connection.on('connected', () => {
  console.log('mongoDB connected')
})

routes(app)

app.listen(config.port, () => {
  connect()
  console.log('Connected to database')
})
