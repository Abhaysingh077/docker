import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetbillbynameService {

  constructor(private _getbillByName:HttpClient) { }
  getbill(name:string){
    return this._getbillByName.get('http://192.168.0.163:9091/cart/'+name)
  }
}
