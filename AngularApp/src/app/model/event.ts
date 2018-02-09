import { Entry } from './entry';

export class Event {
    constructor(public name: string, public eventid: number, public entry: Entry[]) {}
}
