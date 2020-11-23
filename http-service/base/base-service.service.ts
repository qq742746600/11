import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';

export const host = 'http://xiaozishengtaiquan.wizssoft.com/'
export const host_api = `${host}api`
export const headers = new HttpHeaders().set("Content-Type", "application/json");

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {

  constructor( private http: HttpClient) {
  }


  public get<T>(path : string,params:HttpParams) : Observable<T>{
    return this.http.get<T>(`${host}${path}`,{params})
  }


  public post(path : string,body : any): Observable<number> {
    return this.http.post<number>(`${host}${path}`,body)

  }
  
}
