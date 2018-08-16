import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  newFoodTruck(newFoodTruck){
    return this._http.post('/trucks',newFoodTruck)
  }

  getFoodTrucks(){
    return this._http.get('/trucks')
  }

}
