import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 

@Injectable({
  providedIn: 'root',
})
export class FooditemService {
  constructor(private _http: HttpClient) {}

  getFooddata() {
    return this._http.get('http://192.168.0.163:9091/menu');
  }
}
