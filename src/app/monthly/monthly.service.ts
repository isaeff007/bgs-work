import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import {BalancingOverviewMonthlyDTO} from './balancing-overview-monthly-dto';


@Injectable()
export class MonthlyService {

  dtoUrl: string;

  constructor(private http: Http) { }

  getAllMonths(): Observable<BalancingOverviewMonthlyDTO[]> {
    this.dtoUrl = 'assets/data/overview.json';
    return this.http.get(this.dtoUrl)
      .map((response: Response) =>
          response.json()

      ).do( data =>  console.log(data));

  }

}
