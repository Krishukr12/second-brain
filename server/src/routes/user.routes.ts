import { Router } from 'express'
import { signUpUser, singInUser } from '../controllers'

export const UserRouter = Router()

UserRouter.post('/signin', singInUser)
UserRouter.post('signup', signUpUser)

UserRouter.get('/', (req, res) => {
  res.send('working fine')
})
