import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SouthindianService {

  constructor(private _south:HttpClient) { }
  getSouthfood() {
    return this._south.get('http://192.168.0.163:9091/men/South Indian');
  }
  
}
