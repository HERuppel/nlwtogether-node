import { Router } from 'express'
import { ensureAdmin } from '../middlewares/ensureAdmin'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticathed'

import UserCreateController from '../controllers/CreateUserController'
import CreateTagController from '../controllers/CreateTagController'
import AuthenticateUserController from '../controllers/AuthenticateUserController'
import CreateComplimentController from '../controllers/CreateComplimentController'
import ListUserReceiveComplimentsController from '../controllers/ListUserReceiveComplimentsController'
import ListUserSendComplimentsController from '../controllers/ListUserSendComplimentsController'
import ListTagsController from '../controllers/ListTagsController'
import ListUsersController from '../controllers/ListUsersController'


const router = Router()

const userCreateController = new UserCreateController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController()
const listUserSendComplimentsController = new ListUserSendComplimentsController()
const listTagsController = new ListTagsController()
const listUsersController = new ListUsersController()

router.post('/users', userCreateController.handle)
router.post('/tags', ensureAuthenticated, ensureAdmin, createTagController.handle)
router.post('/login', authenticateUserController.handle)
router.post('/compliments', ensureAuthenticated, createComplimentController.handle)
router.get('/users/compliments/send', ensureAuthenticated, listUserSendComplimentsController.handle)
router.get('/users/compliments/receive', ensureAuthenticated, listUserReceiveComplimentsController.handle)
router.get('/tags', ensureAuthenticated, listTagsController.handle)
router.get('/users', ensureAuthenticated, listUsersController.handle)

export default router