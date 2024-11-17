import { Request, Response, Router } from 'express'

export const LinkRouter = Router()

LinkRouter.get('/', (req: Request, res: Response) => {
  res.send('working fine link router')
})
