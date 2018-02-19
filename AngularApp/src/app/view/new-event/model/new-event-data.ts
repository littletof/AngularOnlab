import {Event} from '../../../model/event';
import { Moment } from 'moment';

export class NewEventData {

    constructor(public Title?: string, public Name?: string, public Email?: string,
                public Description?: string, public SelectedDays: Array<Moment> = [], public DisabledDays?: number[] /*,options*/) {}

    isValid(): boolean {
        return !!this.Title && !!this.Title.trim() && this.SelectedDays.length > 0;
    }

    onlyDaysInvalid() {
        return !!this.Title && !!this.Title.trim() && this.SelectedDays.length === 0;
    }

    getError(): any[] {
        return null;
    }

    getEvent(): Event {
        const days: string[] = [];
        this.SelectedDays.forEach(element => {
            days.push(element.toISOString());
        });

        const event = new Event(null, this.Title, this.SelectedDays, this.DisabledDays, this.Name, this.Email, this.Description);
        return event;
    }
}
