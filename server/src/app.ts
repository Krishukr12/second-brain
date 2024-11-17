import 'dotenv/config'

import express, { Request, Response } from 'express'
import { connectDataBase } from './config'
import { ContentRouter, LinkRouter, TagsRouter, UserRouter } from './routes'
import { validateData } from './middlewares'
import { SignInSchema } from './schema'

const PORT = process.env.PORT ?? 8080

const app = express()

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('<span>Welcome to second brain!</span>')
})

app.use('/user', validateData(SignInSchema), UserRouter)
app.use('/content', ContentRouter)
app.use('/tags', TagsRouter)
app.use('/link', LinkRouter)

app.listen(PORT, async () => {
  try {
    await connectDataBase
    console.log(`server is running on localhost:${process.env.PORT}`)
  } catch (error) {
    console.log('error while connecting database', error)
  }
})
