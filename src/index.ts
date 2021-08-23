import { User } from './models/User'

const user = User.buildUser({ id:1, name: 'more newer', age: 100 })

user.on('change', () => {
    console.log(user)
})

user.fetch()
