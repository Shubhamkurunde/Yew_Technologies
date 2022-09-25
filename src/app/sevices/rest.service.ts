import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private _http:HttpClient) { }

  add_data(data:any){
    return this._http.post(environment.url + '/add_data', data);
  }
  get_all_info(){
    return this._http.get(environment.url + '/get_all_list');
  }

}
