import { Model } from './Model'
import { Attributes } from './Attributes'
import { ApiSync } from './ApiSync'
import { Eventing } from './Eventing'
import { USERS_URL } from '../constants'
import { Collection } from './Collection'

export interface UserProps {
    id?: number
    name?: string
    age?: number
}

export class User extends Model<UserProps> {
    static buildUser(attrs: UserProps): User {
        return new User(
            new Attributes<UserProps>(attrs),
            new Eventing(),
            new ApiSync<UserProps>(USERS_URL)
        )
    }

    static buildUserCollection(): Collection<User, UserProps> {
        return new Collection<User, UserProps>(
            USERS_URL,
            (json: UserProps) => User.buildUser(json)
        )
    }
}
