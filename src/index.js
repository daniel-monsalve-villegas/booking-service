import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import routes from './routes.js'
import cookieParser from 'cookie-parser'

const app = express()
app.use(express.json())
app.use(cookieParser())
dotenv.config()

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI)
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

app.get('/', (req, res) => {
  res.send('Hello World')
})

routes(app)

app.listen(8080, () => {
  connect()
  console.log('Connected to database')
})
