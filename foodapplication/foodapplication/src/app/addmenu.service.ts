import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddmenuService {
  constructor(private _additem: HttpClient) {}

info:string=''


  addfood(body: any) {
    return this._additem.post(
      'http://192.168.0.163:9091/addmenu',
      body
    );
  }
  deleteFood(id:number){
    return this._additem.delete( 'http://192.168.0.163:9091/menu/'+id)
  }
}
