import { Component, OnInit,OnChanges, Input } from '@angular/core';
import { LineChartConfig } from '../line-char-config-class';
import {Company} from '../company';
import {ChartStocksService} from '../chart-stocks.service';
import {ChartStocks} from '../chart-stocks';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnChanges {
  
  @Input() companies: Company[];
  

  title = 'Reusable charts sample';

  data1: any[];
  config1: LineChartConfig;
  elementId1: String;

  constructor(private chartStocksService: ChartStocksService) { }

  ngOnInit():void {

    
    
    //Piechart1 Data & Config
    this.data1 = [['Date', 'GE', 'FB'],
    ['08/03/2018',      45 , 30],
    ['08/04/2018',  42, 35],
    ['08/05/2018', 50, 20],
    ['08/06/2018', 40, 25],
    ['08/07/2018',    10, 10]];
    

    this.config1 = new LineChartConfig('My Daily Activities at 20 years old', "0.4");
    this.elementId1 = 'myPieChart1';
   
  }
  ngOnChanges(changes: SimpleChanges) {
    if (this.companies){
      let companies = this.companies.map((company: Company) => {
        return company.code;        
      }) 
      this.chartStocksService.stocksSearchValues(companies,'1Y')
        .subscribe( (data)  => {
          //console.log("data",JSON.stringify(data));
          //console.log("data");
          this.data1 = [['Date','GE']];          
          
          companies.map((company) => {            
            let stockDates = data[company].chart;
            stockDates.map((data) => {
              this.data1.push([data.date,data.vwap]);
            });
            
            
            //console.log("Company: ", company +":"+ JSON.stringify(data[company].chart));
          })
          }          
        );
      
    }
  }

}
