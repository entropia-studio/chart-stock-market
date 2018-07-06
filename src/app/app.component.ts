import { Component, OnInit } from '@angular/core';
import {ChartStocksService} from './chart-stocks.service';
import {ChartStocks} from './chart-stocks';
import {Company} from './company';
import {SocketBroadcastService} from './socket-broadcast.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SocketBroadcastService]
  
})
export class AppComponent implements OnInit{
  title = 'app';  
  jsonResponse: Object;
  companies: Company[];
  company: Company = new Company;

  companies1: [] = ["GE","FB"];
  
  constructor(
   // private charStocks: ChartStocks,
    private chartStocksService: ChartStocksService,
    private socketBroadcastService: SocketBroadcastService   
  ) {
    socketBroadcastService.messages.subscribe((msg) => {
      this.getCompanies();
      console.log("msg",msg);
    });
  }

  ngOnInit() : void{    
    this.getCompanies();   

    
    /*
    this.chartStockService.stocksSearchValues(["GOOGL"],"ytd")
    .subscribe(chartData => {
      //this.jsonResponse = JSON.stringify(chartData);
      console.log(chartData["GOOGL"].quote.companyName);
     }     
    );
    */    
  }

  getCompanies() : void {
    this.chartStocksService.getCompanies()
      .subscribe( companies => {
        this.companies = companies;     
        console.log("Companies",this.companies);   
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
        this.socketBroadcastService.messages.next({"action": "add"});
      });
  }
  
  deleteCompany(company : Company) {    
    this.companies = this.companies.filter(c => c !== company);
    this.chartStocksService.deleteCompany(company)
    .subscribe(() => {
      this.socketBroadcastService.messages.next({"action": "delete"});
    });    
  }
  
  
}
