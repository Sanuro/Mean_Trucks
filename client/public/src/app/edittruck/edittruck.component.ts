import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edittruck',
  templateUrl: './edittruck.component.html',
  styleUrls: ['./edittruck.component.css']
})

export class EdittruckComponent implements OnInit {
  foodtruck = {}
  error = {}
  constructor(
    private _httpService: HttpService, 
    private _route: ActivatedRoute, 
    private _router: Router) { }

    updateFoodtruck(_id){
      let observable=this._httpService.updateTruck(_id,this.foodtruck);
      observable.subscribe(data =>{
        console.log(data)
        if(data["status"] === 200) {
          this._router.navigate(["/"]);
        }
        else {
          this.error = data["errors"];
        }
      })
    }

    deleteOnClick(_id) {
      let observable = this._httpService.deleteTruck(_id);
      observable.subscribe(data => {
        if(data["status"] === 200) {
          this._router.navigate(["/"]);
        }
      })
    }

  ngOnInit() {
    
    this._route.params.subscribe( (params: Params) => {
      let observable = this._httpService.getTruck( params["_id"]);
      observable.subscribe( data => {
        this.foodtruck = data;
        console.log(data)
      }); 
    }); 
  }


}
