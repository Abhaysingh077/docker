import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetcartserviceService {

  constructor(private _getcart:HttpClient) { }
  getcart(){
    return this._getcart.get('http://192.168.0.163:9091/cart');
  }
  deleteCart(id:number){
    return this._getcart.delete('http://192.168.0.163:9091/cart/'+id);
  }
}
