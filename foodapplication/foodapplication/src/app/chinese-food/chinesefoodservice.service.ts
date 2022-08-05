import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChinesefoodserviceService {

  constructor(private _chinesefood:HttpClient) { }
  getChinesefood(){
    return this._chinesefood.get('http://192.168.0.163:9091/men/Chinese');
  }
}
