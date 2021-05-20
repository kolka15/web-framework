import { User } from './models/User'

const user = new User({})

user.on('change', () => {
    console.log('change #1')
})
user.on('change', () => {
    console.log('change #2')
})
user.on('save', () => {
    console.log('Save!!!')
})

user.trigger('change')
user.trigger('save')
user.trigger('sdfsdfdsfde')
