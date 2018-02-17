import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.css']
})
export class RadioGroupComponent implements OnInit {


  @Input() options: any[];

  @Input() selected: number;
  @Output() selectedChange: EventEmitter<number> = new EventEmitter();

  uid: number;

  constructor() {
    this.uid = Math.random();
  }

  ngOnInit() {
  }

}
