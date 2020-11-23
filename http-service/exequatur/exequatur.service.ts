import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseServiceService } from '../base/base-service.service';

@Injectable({
  providedIn: 'root',
})
export class ExequaturService {
  constructor(private http: BaseServiceService) {}
  public get(body: any): Observable<any> {
    const path = '/api/Exequatur';
    const params = new HttpParams();
    for (const key in body) {
      params.set(key, body[key]);
    }
    return this.http.get<any>(path, params);
  }
}
