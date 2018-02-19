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
}
