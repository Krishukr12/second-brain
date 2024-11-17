import 'dotenv/config'
import mongoose from 'mongoose'

// if env is not present throw an error
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE URL ERROR')
}

export const connectDataBase: mongoose.Connection = mongoose.createConnection(
  process.env.DATABASE_URL
)

mongoose.connection.on('disconnected', () => {
  throw new Error('Connection unestablished')
})

mongoose.connection.on('connected', () => {
  throw new Error('MongoDb connected successfully')
})

mongoose.connection.on('error', (error) => {
  throw new Error(`mongodb connection error : ${error.message}`)
})
