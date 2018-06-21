import { Component, OnInit } from '@angular/core';
import {ChartStocksService} from './chart-stocks.service';
import {ChartStocks} from './chart-stocks';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(
    private charStocks: ChartStocks
    //private chartStockService: ChartStocksService    
  ) {}

  ngOnInit(){
    /*
    const json = this.chartStockService.stocksSearchValues()
    .subscribe(chartData => {
      console.log(chartData);
     }     
    );
    */
   console.log('hi');
    
  }
  
}
