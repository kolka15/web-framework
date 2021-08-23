import { Collection} from './models/Collection'
import { USERS_URL } from './constants'

const collection = new Collection(USERS_URL)

collection.on('change', () => {
    console.log('collection', collection)
})

collection.fetch()
