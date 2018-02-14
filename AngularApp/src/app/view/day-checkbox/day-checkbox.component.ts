import { Component, OnInit, EventEmitter, Output, Input, SimpleChanges, SimpleChange, OnChanges } from '@angular/core';


@Component({
  selector: 'app-day-checkbox',
  templateUrl: './day-checkbox.component.html',
  styleUrls: ['./day-checkbox.component.css']
})
export class DayCheckboxComponent implements OnInit, OnChanges {

  @Input() selected: number[] = [];
  @Output() selectedChange: EventEmitter<number[]> = new EventEmitter();
  @Output() change: EventEmitter<any> = new EventEmitter();

  days: any[] = [
    {value: false, name: 'h', number: 1},
    {value: false, name: 'k', number: 2},
    {value: false, name: 'sze', number: 3},
    {value: false, name: 'cs', number: 4},
    {value: false, name: 'p', number: 5},
    {value: false, name: 'szo', number: 6},
    {value: false, name: 'v', number: 0}
  ];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const selected: SimpleChange = changes.selected;
    if (selected.currentValue) {
      const values = selected.currentValue;
      if (!Array.isArray(values)) {
        throw Error('Passed selected is not an array');
      }

      for (const daynum of values) {
        if (daynum < 7 && daynum >= 0) {
          this.setDay(daynum, true);
        } else {
          this.removeFromArray(this.selected, daynum);
          this.emit();
        }

      }


    } else {
      this.selected = [];
    }

  }

  setDay(daynum: number, value: boolean) {
    if (daynum < 7 && daynum >= 0) {
      this.days[(daynum + 6) % 7].value = value;
    }
  }

  emit() {
    const copy: number[] = this.selected.slice();
    this.selectedChange.emit(copy);
    this.change.emit(null);
  }

  changed(i: number) {
    const daynum = this.days[i].number;
    if (this.days[i].value) {
      if (this.selected.indexOf(daynum) === -1 ) {
        this.selected.push(daynum);
      }
    } else {
      this.removeFromArray(this.selected, daynum);
    }

    this.emit();
  }

  removeFromArray(array: any[], item: number) {
    const index = array.indexOf(item);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

}
