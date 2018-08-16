import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-truck',
  templateUrl: './truck.component.html',
  styleUrls: ['./truck.component.css']
})
export class TruckComponent implements OnInit {

  @Input() truck = {}; 
  constructor() { }

  ngOnInit() {
  }

}
