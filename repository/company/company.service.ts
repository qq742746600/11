import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { CompanyServiceService } from 'src/app/http_service/company/company-service.service';
import { companyData, companyDto, companyQuery } from 'src/app/models/company/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private comSub  = new BehaviorSubject(new Array<companyData>());
  $companies = this.comSub.asObservable();

  constructor(private client : CompanyServiceService) { }

  public AddCompanyOrUpate(body : companyDto) {
    this.client.post(body).subscribe(q=>{
      if (q) {
        alert("chenggong")
      }
    })
  }

  public get(body : companyQuery)
  {
    this.client.get(body).subscribe(re=>{
      this.comSub.next(re.data);
    })
  }
}
