import { Component, OnInit } from '@angular/core';
import {ChartStocksService} from './chart-stocks.service';
import {Company} from './company';
import {SocketBroadcastService} from './socket-broadcast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  
  
})
export class AppComponent implements OnInit{    
  companies: Company[];
  company: Company = new Company; 
  period: string = "1M";
    
  constructor(       
    private chartStocksService: ChartStocksService,
    private socketBroadcastService: SocketBroadcastService,    
  ) {
    socketBroadcastService.messages.subscribe((msg) => {
      this.getCompanies();     
      console.log("msg",msg) 
    });
  }

  ngOnInit() : void{        
    this.getCompanies();        
  }

  getCompanies() : void {
    this.chartStocksService.getCompanies()
      .subscribe( companies => {
        this.companies = companies;                     
      }
    )
  }

  addCompany(companyCode: string): void {
    companyCode = companyCode.trim();
    if (!companyCode) { return; }    
    this.company.code = companyCode;
    this.chartStocksService.addCompany(this.company)
      .subscribe(company => {
        this.companies.push(company);
        //this.socketBroadcastService.messages.next({"action": "add"});
      });
  }
  
  deleteCompany(company : Company) {    
    this.companies = this.companies.filter(c => c !== company);
    this.chartStocksService.deleteCompany(company)
    .subscribe(() => {
      //this.socketBroadcastService.messages.next({"action": "delete"});
    });    
  }
  setPeriod(period: string):void {
    this.period = period;
  } 


}
