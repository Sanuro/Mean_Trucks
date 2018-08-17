import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-reviewtruck',
  templateUrl: './reviewtruck.component.html',
  styleUrls: ['./reviewtruck.component.css']
})

export class ReviewtruckComponent implements OnInit {
  foodtruck: any;
  error = {}
  newReview = {rating: 3}
  constructor(
    private _httpService: HttpService, 
    private _route: ActivatedRoute, 
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe( (params: Params) => {
      let observable = this._httpService.getTruck( params["_id"]);
      observable.subscribe( data => {
        this.foodtruck = data;
        console.log(data)
      }); 
    }); 
  }

  createReview(_id){
    let observable = this._httpService.createReview(_id, this.newReview);
    observable.subscribe( data => {
      if (data['status'] == 200) {
        this._router.navigate(['']);
      } else {
        this.error = data['errors'];
      }
      console.log("getting Reviews", data);
    })
    
  }
}
