import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  newFoodTruck(newFoodTruck){
    return this._http.post('/trucks', newFoodTruck);
  }

  getFoodTrucks(){
    return this._http.get('/trucks');
  }

  getTruck(_id){
    return this._http.get(`/truck/${_id}`);
  }
  updateTruck(_id,updatedTruck){
    return this._http.put(`/truck/${_id}`,updatedTruck)
  }

  deleteTruck(_id) {
    return this._http.delete(`/deleteTruck/${_id}`);
  }
  
  createReview(_id, newReview){
    return  this._http.post(`/trucks/${_id}/review`, newReview);
  }


}
