import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  foodTrucks = []
  constructor(private _httpservice: HttpService) { }

  ngOnInit() {
    let observable = this._httpservice.getFoodTrucks()
    observable.subscribe(data => {
      this.foodTrucks = data['trucks'];
      console.log(this.foodTrucks)

    })

  }

}
