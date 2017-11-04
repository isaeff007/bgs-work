import { Component, OnInit, ViewChild } from '@angular/core';
import {BalancingOverviewMonthlyDTO} from './balancing-overview-monthly-dto';
import {MonthlyService} from './monthly.service';
import {Severity} from './severity.enum';
import {Carousel, Dropdown, SelectItem} from 'primeng/primeng';
import {MgaDTO} from './MgaDto';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.css'],
  providers: [MonthlyService]
})
export class MonthlyComponent implements OnInit {

  // to have access to mCarousel component functions (s. github)
  @ViewChild('crsl') mCarousel: Carousel;
  @ViewChild('dddw') mDropDown: Dropdown;

  months:  BalancingOverviewMonthlyDTO[];

  // MGA
  mgas: MgaDTO[];
  myMgas: SelectItem[];
  selectedMyMga: MgaDTO;
  // MGA end

  monthly: BalancingOverviewMonthlyDTO;
  pageIndex: number;
  goToIndex: number;

  constructor(private service: MonthlyService) {


  }


  ngOnInit() {
    this.service.getAllMonths().subscribe(data => this.months = data, err => console.log(err));

    this.myMgas = [];
    this.service.getMgas().subscribe(data => this.mgas = data, err => console.log(err),
      () => {
        this.mgas.forEach(mga => this.myMgas.push({label: mga.name, value: mga}));

        this.selectedMyMga = this.mgas[0];
        // Add the default option at position 0
        this.myMgas.splice(0, 0, {label: 'LastSelectedMGA', value: {id: 5, name: 'LastSelectedMGA'}});
        //workaround to set the last selected MGA (for example with id 2)
        this.mDropDown.selectItem(event, this.myMgas[2])
      });


    this.goToIndex = 0;
    // this.mgas.forEach(mga => this.myMgas.push( {label: mga.name, value: mga}));

  }

  // new mga selected
  handleChange(event) {
    console.log('Selected ' + event.value.id + '----' + event.value.name);
    // call the bgs rest api with the MGA id event.value.id
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
       return 'success';
     case 'RED':
       return 'danger';
     case 'YELLOW':
       return 'warning';
     default:
       return 'info';

   }
 }
}


