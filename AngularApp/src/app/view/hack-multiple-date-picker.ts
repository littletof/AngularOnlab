import * as moment from 'moment';
import { MultipleDatePickerComponent } from 'multiple-date-picker-angular/dist';

export class PickerHacker {
    static hackDatePicker(dp: MultipleDatePickerComponent, allowed: Array<moment.Moment>) {
        (dp as any).oldisDayOff = dp.isDayOff;


        (dp as any).refreshAllowed = function (allowedDays: Array<moment.Moment>) {
            if (dp.daysAllowed) {
                dp.daysAllowed.join(allowedDays);
            } else {
                dp.daysAllowed = allowedDays;
            }
          dp.runGenerate();
        };

        (dp as any).refreshAllowed(allowed);

        dp.isDayOff = function (day) {
          return ((dp as any).oldisDayOff(day) && !dp.daysAllowed.some(arr_day => {
              return arr_day.isSame(day.date, 'day') &&
              !(dp.weekDaysOff && dp.weekDaysOff.indexOf((arr_day.isoWeekday()) % 7) !== -1);
          }));
        };
      }
}
