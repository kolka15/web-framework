import axios, { AxiosResponse } from 'axios'
import { USERS_URL } from '../constants'

interface UserProps {
    id?: number
    name?: string
    age?: number
}

type Callback = () => void

export class User {
    events: { [key: string]: Callback[] } = {}

    constructor(private data: UserProps) {
    }

    get(propName: string): string | number {
        // @ts-ignore
        return this.data[propName]
    }

    set(update: UserProps): void {
        Object.assign(this.data, update)
    }

    on(eventName: string, callback: Callback): void {
        const handlers = this.events[eventName] || []
        handlers.push(callback)
        this.events[eventName] = handlers
    }

    trigger(eventName: string): void {
        const handlers = this.events[eventName]

        if (!handlers || handlers.length === 0) {
            return
        }

        handlers.forEach((callback) => {
            callback()
        })
    }

    fetch(): void {
        axios.get(`${USERS_URL}${this.get('id')}`)
            .then((response: AxiosResponse): void => {
                this.set(response.data)
            })
    }

    save(): void {
        const id = this.get('id')
        if (id) {
            axios.put(`${USERS_URL}${id}`, this.data)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            axios.post(`${USERS_URL}`, this.data)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
}
