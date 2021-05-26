import { Eventing } from './Eventing'

export interface UserProps {
    id?: number
    name?: string
    age?: number
}

export class User {

    public events: Eventing = new Eventing()

    constructor(private data: UserProps) {
    }

    get(propName: string): string | number {
        // @ts-ignore
        return this.data[propName]
    }

    set(update: UserProps): void {
        Object.assign(this.data, update)
    }


}
