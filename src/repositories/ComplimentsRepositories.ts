import { Repository, EntityRepository } from 'typeorm'
import Compliment from '../models/Compliment'

@EntityRepository(Compliment)
class ComplimentsRepositories extends Repository<Compliment> {}

export default ComplimentsRepositories