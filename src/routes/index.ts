import { Router } from 'express'
import UserCreateController from '../controllers/CreateUserController'

const router = Router()

const userCreateController = new UserCreateController()

router.post('/users', userCreateController.handle)

export default router