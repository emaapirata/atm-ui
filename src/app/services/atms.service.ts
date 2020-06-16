import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Atm } from '../interfaces/atm.interface';
import { parseLazyRoute } from '@angular/compiler/src/aot/lazy_routes';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AtmsService {

  url:string = "http://localhost:8080/api/atms"
  constructor(private http:HttpClient) {  }
  getAtms = (city:string,zipcode:string,street:string,hnumber:string,type:string)=>{
    const newUrl = `${this.url}?city=${city? city:''}&zipcode=${zipcode?zipcode:''}&street=${street?street:''}&hnumber=${hnumber?hnumber:''}&type=${type?type:''}`;
    console.log(newUrl);
    return this.http.get(newUrl).pipe(
      map((resp: any) => {
        console.log(resp);
        if (resp.ok) {
          return resp.result;
        } else {
          return resp;
        }
      })
    ); 
  }
}
