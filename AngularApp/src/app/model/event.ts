import { Entry } from './entry';

export class Event {
    constructor(public name: string, public eventId: number, public description: string, public entry: Entry[]) {}
}
