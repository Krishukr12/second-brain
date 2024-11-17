import { NextFunction, Request, Response } from 'express'

export const singInUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('working fine')
  try {
    //todo: data validation -- zod
    //todo: pass- hash
    // todo: save to database
    res.send('working fine')
  } catch (error) {
    throw new Error('error while creating user!')
  }
}

export const signUpUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //todo: data validation -- zod
    //todo: pass- hash
    // todo: save to database
    res.send('working fine!')
  } catch (error) {
    throw new Error('error while creating user!')
  }
}
