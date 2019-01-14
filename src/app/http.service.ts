import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){
   }
   getCakes(){
      return this._http.get('/cakes')
   }
  create(cake){
    return this._http.post('/cakes', cake)
  }
  addRating(data){
    return this._http.post('/ratings', data)
  }
}



