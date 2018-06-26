import { Component, OnInit } from '@angular/core';
import {ChartStocksService} from './chart-stocks.service';
import {ChartStocks} from './chart-stocks';
import {Company} from './company';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';  
  jsonResponse: Object;
  companies: Company[];
  company: Company = new Company;
  
  constructor(
   // private charStocks: ChartStocks,
    private chartStockService: ChartStocksService    
  ) {}

  ngOnInit() : void{
    
    this.chartStockService.getCompanies()
      .subscribe( companies => {
        this.companies = companies;
      }
    )
    

    /*
    this.chartStockService.stocksSearchValues(["GOOGL"],"ytd")
    .subscribe(chartData => {
      //this.jsonResponse = JSON.stringify(chartData);
      console.log(chartData["GOOGL"].quote.companyName);
     }     
    );
    */    
  }

  addCompany(companyCode: string): void {
    companyCode = companyCode.trim();
    if (!companyCode) { return; }    
    this.company.code = companyCode;
    this.chartStockService.addCompany(this.company)
      .subscribe(company => {
        this.companies.push(company);
      });
  }
  
  deleteCompany(company : Company) {    
    this.companies = this.companies.filter(c => c !== company);
    this.chartStockService.deleteCompany(company)
    .subscribe();    
  }
  
  
}
