import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddttocartService {

  constructor(private _addtocart:HttpClient) { }
  addtocart(data:any){
    
    return this._addtocart.post('http://192.168.0.163:9091/addcart',data);
  }
}
