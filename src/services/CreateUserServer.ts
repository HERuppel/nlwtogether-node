import { getCustomRepository } from 'typeorm'
import UsersRepositories from '../repositories/UsersRepositories'

interface IUserRequest {
  name: string
  email: string
  admin?: boolean
}

class CreateUserService {

  async execute({ name, email, admin }: IUserRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories) 

    if (!email) throw new Error('Incorrect Email')

    const userAlreadyExists = await usersRepositories.findOne({
      email
    })

    if (userAlreadyExists) throw new Error('User already exists')

    const user = usersRepositories.create({
      email,
      name,
      admin
    })

    await usersRepositories.save(user)

    return user
  }
}

export default CreateUserService