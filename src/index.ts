import { User } from './models/User'

const user = new User({ name: '22', age: 94 })

user.events.on('change', () => {
    console.log('change!')
})

user.events.trigger('change')
