import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.css']
})
export class RadioGroupComponent implements OnInit, OnChanges {

  @Input() options: any[];

  @Input() selected: number;
  @Output() selectedChange = new EventEmitter<number>();

  uid: number;

  constructor() {
    this.uid = Math.random();
  }

  ngOnInit() {
  }

  clicked(index: number) {
    this.selected = index;
    this.selectedChange.emit(this.selected);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes.selected;
    // console.log(change);
  }

}
