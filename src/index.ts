import { UserForm } from './views/UserForm'
import { User } from './models/User'

const user = User.buildUser({ name: 'NAME', age: 23 })
const root = document.getElementById('root')

if (root) {
    const userForm = new UserForm(
        root,
        user
    )

    userForm.render()
} else {
    throw new Error('Root element not found')
}
