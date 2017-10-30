import { Component, OnInit, ViewChild } from '@angular/core';
import {BalancingOverviewMonthlyDTO} from './balancing-overview-monthly-dto';
import {MonthlyService} from './monthly.service';
import {Severity} from './severity.enum';
import {Carousel} from 'primeng/primeng';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.css'],
  providers: [MonthlyService]
})
export class MonthlyComponent implements OnInit {

  // to have access to mCarousel component functions (s. github)
  @ViewChild('crsl') mCarousel: Carousel;

  months:  BalancingOverviewMonthlyDTO[];
  monthly: BalancingOverviewMonthlyDTO;
  pageIndex: number;
  goToIndex: number;

  constructor(private service: MonthlyService) { }



  ngOnInit() {
  this.service.getAllMonths().subscribe(data => this.months = data, err => console.log(err));
  this.goToIndex = 0;

  }


  setPage(page) {
    this.pageIndex = page.page;
  }

  // just to check the extern call works
  onclick() {
    this.goToPage(this.goToIndex++);
  }

  goToPage(p: number) {
    this.mCarousel.setPage(p);
  }

 public geSeverityClass(severity: string): string {
   switch (severity) {
     case 'GREEN':
       return 'badge1';
     case 'RED':
       return 'badge2';
     default:
       return 'button1';

   }
 }
}


