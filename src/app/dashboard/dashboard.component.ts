import { Component, OnInit,OnChanges, Input } from '@angular/core';
import { LineChartConfig } from '../line-char-config-class';
import {Company} from '../company';
import {ChartStocksService} from '../chart-stocks.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnChanges {
  
  @Input() companies: Company[];
  @Input() period: string; 

  data1: any[] = [];
  config1: LineChartConfig;
  elementId1: String;

  constructor(private chartStocksService: ChartStocksService) { }

  ngOnChanges(): void {     
    if (this.companies){            
      this.setDataLineChart(this.companies);
    }      
  }

  setDataLineChart(companies: Company[]){
    let companiesCodes = this.companies.map((company: Company) => {
      return company.code;        
    });

    var mData: any[] = [];

    mData[0] = ['Date',...companiesCodes];
    
    this.chartStocksService.stocksSearchValues(companiesCodes,this.period)
        .subscribe((data) => {
          
          companiesCodes.map((code,index) => {            
            // Chart data for this company
            const chart = data[code].chart;
            
            chart.map((stock,i) => {
              if (index == 0){
                mData.push([new Date(stock.date),stock.vwap]);
              }else{
                mData[i+1].push(stock.vwap);
              }
            });                       
          })
          
          this.data1 = mData;
          this.config1 = new LineChartConfig('Stocks value in $', "VWAP value");
          this.elementId1 = 'stocksLineChart';     
        });    
  }
}
