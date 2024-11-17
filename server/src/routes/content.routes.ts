import { Request, Response, Router } from 'express'

export const ContentRouter = Router()

ContentRouter.get('/', (_req: Request, res: Response) => {
  res.send('Welcome to Content Router')
})
