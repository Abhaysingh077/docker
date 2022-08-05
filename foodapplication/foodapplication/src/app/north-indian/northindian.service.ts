import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NorthindianService {

  constructor(private _northidian:HttpClient) { }
  northIndianfood(){
   return this._northidian.get('http://192.168.0.163:9091/men/North Indian');
  }
}
