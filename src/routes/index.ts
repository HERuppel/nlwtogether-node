import { Router } from 'express'
import { ensureAdmin } from '../middlewares/ensureAdmin'

import UserCreateController from '../controllers/CreateUserController'
import CreateTagController from '../controllers/CreateTagController'
import AuthenticateUserController from '../controllers/AuthenticateUserController'
import CreateComplimentController from '../controllers/CreateComplimentController'

const router = Router()

const userCreateController = new UserCreateController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()

router.post('/users', userCreateController.handle)
router.post('/tags', ensureAdmin, createTagController.handle)
router.post('/login', authenticateUserController.handle)
router.post('/compliments', createComplimentController.handle)

export default router