import { z } from 'zod'

export const SignInSchema = z.object({
  username: z
    .string({ required_error: 'username is required' })
    .min(3, { message: 'username must be at least 3 characters' }),

  password: z
    .string({ required_error: 'password is required' })
    .min(8, { message: 'password must be at least 8 characters' })
    .max(20, { message: 'password must be at most 20 characters' })
    .regex(/[A-Z]/, {
      message: 'password must contain at least one uppercase letter'
    })
    .regex(/[a-z]/, {
      message: 'password must contain at least one lowercase letter'
    })
    .regex(/\d/, { message: 'password must contain at least one number' })
    .regex(/[@$!%*?&]/, {
      message:
        'password must contain at least one special character (@, $, !, %, *, ?, &)'
    })
})
