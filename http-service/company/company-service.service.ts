import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { companyDto } from 'src/app/models/company/company';
import { BaseServiceService } from '../base/base-service.service';

@Injectable({
  providedIn: 'root',
})
export class CompanyServiceService {
  constructor(private http: BaseServiceService) {}

  private readonly path = 'api/Company';

  public getCompany(body: any): Observable<companyDto> {
    const params = new HttpParams();
    for (const key in body) {
      params.set(key, body[key]);
    }
    return this.http.get<companyDto>(this.path, params);
  }
 
  public post(body: any) {
    return this.http.post(this.path, body);
  }
}
