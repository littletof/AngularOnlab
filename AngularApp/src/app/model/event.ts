import { Entry } from './entry';

export class Event {
    constructor(public title: string, public id: number, public description: string, public entry: Entry[]) {}
}
