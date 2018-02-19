import { Entry } from './entry';

export class Event {
    constructor(public id: number, public title: string, public Selecteddays: string[],
        public Disableddays?: number[], public name?: string, public email?: string, public description?: string) {}

    /*{"Title":"Title","Name":"Name","Email":"email@e.ma","Description":"description",
    "SelectedDays":["2018-02-18T23:00:00.000Z","2018-02-19T23:00:00.000Z","2018-02-20T23:00:00.000Z"],"DisabledDays":[4]} */
}
