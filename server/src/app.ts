import express from 'express'
import { connectDataBase } from './config'
import { ContentRouter, LinkRouter, TagsRouter, userRouter } from './routes'

import 'dotenv/config'

const app = express()

app.use(express.json())

app.use('/user', userRouter)
app.use('/content', ContentRouter)
app.use('/tags', TagsRouter)
app.use('/link', LinkRouter)

app.listen(process.env.PORT, async () => {
  try {
    await connectDataBase
    console.log(`server is running on https://localhost:${process.env.PORT}`)
  } catch (error) {
    console.log('error while connecting database', error)
  }
})
