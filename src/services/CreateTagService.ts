import { getCustomRepository } from 'typeorm'
import TagsRepositories from '../repositories/TagsRepositories'

class TagService {

  async execute(name: string) {
    const tagsRepositories = getCustomRepository(TagsRepositories)

    if (!name) throw new Error('Incorrect name!')

    // SELECT * FROM TAGS WHERE NAME = 'name'
    const tagAlreadyExists = await tagsRepositories.findOne({ name })

    if (tagAlreadyExists) throw new Error('Tag Already exists')

    const tag = await tagsRepositories.create({ name })

    await tagsRepositories.save(tag)

    return tag
  }
}

export default TagService