import * as moment from 'moment';
import { MultipleDatePickerComponent } from 'multiple-date-picker-angular/dist';
import { Moment } from 'moment';

export class DatePickerHacker {
    static hackDatePicker(dp: MultipleDatePickerComponent, allowed: Array<Moment>) {
        (dp as any).oldisDayOff = dp.isDayOff;


        (dp as any).refreshAllowed = function (allowedDays: Array<Moment>) {
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

    static jumpToDate(dp: MultipleDatePickerComponent, day: Moment) {
        const pickerStart = dp.month.clone().startOf('month');
        const dayStart = day.clone().startOf('month');
        const diff = pickerStart.diff(dayStart, 'months', false);

        dp.changeMonth({ preventDefault: function() {} }, null, -diff);
    }
}
