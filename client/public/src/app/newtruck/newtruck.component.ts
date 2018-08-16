import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newtruck',
  templateUrl: './newtruck.component.html',
  styleUrls: ['./newtruck.component.css']
})
export class NewtruckComponent implements OnInit {
  newFoodtruck = {};
  error = {};
  constructor(private _httpService:HttpService,
  private _router: Router) {}

  ngOnInit() {
  }

  addNewFoodtruck() {
    console.log("Clicked on submit button of form", this.newFoodtruck)
    let observable = this._httpService.newFoodTruck(this.newFoodtruck);
    observable.subscribe(data =>{
      if (data['status'] == 200) {
        this._router.navigate(['']);
      }
      else {
        this.error = data['errors'];
      }
    })
  }

}
