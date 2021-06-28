import { getCustomRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import UsersRepositories from '../repositories/UsersRepositories'

interface IAuthenticateRequest {
  email: string
  password: string
}

class AuthenticateUserService {

  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories)

    const userExists = await usersRepositories.findOne({ email })

    if (!userExists) throw new Error('Email/Password incorrect')

    const passwordMatch = await compare(password, userExists.password)

    if (!passwordMatch) throw new Error('Email/Password incorrect')

    const token = sign({ 
      email: userExists.email 
    }, 
    process.env.JWT_SECRET, {
      subject: userExists.id,
      expiresIn: '1d'
    })

    return token
  }
}

export default AuthenticateUserService