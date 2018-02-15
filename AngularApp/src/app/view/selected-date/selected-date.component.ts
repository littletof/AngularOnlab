import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Moment } from 'moment';

@Component({
  selector: 'app-selected-date',
  templateUrl: './selected-date.component.html',
  styleUrls: ['./selected-date.component.css']
})
export class SelectedDateComponent implements OnInit, OnChanges {

  @Input() date: Moment;
  @Input() error: boolean;
  @Output() deleteClicked: EventEmitter<any> = new EventEmitter();
  @Output() dateClicked: EventEmitter<any> = new EventEmitter();


  private good = 'badge-success';
  private danger = 'date-error';
  colorClass: string = this.good;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const error = changes.error;
    if (error) {
      if (!!error.currentValue) {
        this.colorClass = this.danger;
      } else {
        this.colorClass = this.good;
      }
    }
  }

  deletePressed() {
    this.deleteClicked.emit(this.date);
  }

  datePressed() {
    this.dateClicked.emit(this.date);
  }

}
