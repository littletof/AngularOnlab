import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.css']
})
export class TesterComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getTest().subscribe(events => {
      events.map(event => {
        console.log(event);
      });
    });
  }

}
