import * as moment from 'moment/moment';
import { Entry } from './entry';
import { Moment } from 'moment';

export class Event {
    constructor(public id: number, public title: string, public selectedDays: Moment[],
        public disabledDays?: number[], public name?: string, public email?: string, public description?: string) {}

    /*{"Title":"Title","Name":"Name","Email":"email@e.ma","Description":"description",
    "SelectedDays":["2018-02-18T23:00:00.000Z","2018-02-19T23:00:00.000Z","2018-02-20T23:00:00.000Z"],"DisabledDays":[4]} */


    static parseArray(arr: any[]): Event[] {
        return arr.map(event => this.parseEvent(event));
    }

    static parseEvent(event: Event): Event {
        const dateStringList = event.selectedDays;
        event.selectedDays = dateStringList.map(strDate => moment(strDate));
        return event;
    }
}
