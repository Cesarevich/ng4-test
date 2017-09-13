import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'therapist-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() {
    console.log('TherapistDashboardComponent: constructor');
  }

  ngOnInit() {
  }
}
