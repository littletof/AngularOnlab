import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    // PickerHacker.hackDatePicker(this.datePicker, this.allowed);
  }

  log(obj: any) {
    console.log(obj);
  }
}
