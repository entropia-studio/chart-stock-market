import { Component, OnInit } from '@angular/core';
import {ChartStocksService} from './chart-stocks.service';
import {ChartStocks} from './chart-stocks';
import {Company} from './company';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';  
  jsonResponse: Object;
  companies: Array<Company>;
  constructor(
   // private charStocks: ChartStocks,
    private chartStockService: ChartStocksService    
  ) {}

  ngOnInit(){
    
    this.chartStockService.getCompanies()
    .subscribe(companies => {      
      this.companies = companies;
    })

    /*
    this.chartStockService.stocksSearchValues(["GOOGL"],"ytd")
    .subscribe(chartData => {
      //this.jsonResponse = JSON.stringify(chartData);
      console.log(chartData["GOOGL"].quote.companyName);
     }     
    );
    */    
  }

  
  deleteCompany(codeCompany){    
    this.chartStockService.deleteCompany(codeCompany)
    .subscribe();    
  }
  
  
}
