import { Component, OnInit,OnChanges, Input } from '@angular/core';
import { LineChartConfig } from '../line-char-config-class';
import {Company} from '../company';
import {ChartStocksService} from '../chart-stocks.service';
import {GoogleChartBaseService} from '../google-chart-base.service';



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

  constructor(
    private chartStocksService: ChartStocksService,
    private googleChartBaseService: GoogleChartBaseService
  ) { }

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
    
    this.chartStocksService.stocksSearchValues(companiesCodes,this.period)
        .subscribe((data) => {
          
          companiesCodes.map((code,index) => {            
            // Chart data for this company
            const chart = data[code].chart;
            
            chart.map((stock,i) => {             
              var mDate = new Date(stock.date);
              
              if (index == 0){
                mData.push([mDate]);
              }          
              
              mData[i].push(stock.vwap);                            

            });                       
          })          
          
          // Get the google.visualization.DataTable object from the service
          // Doesn't work outside the Observable!!
          var dataTable = this.googleChartBaseService.getDataTable();

          dataTable.addColumn('date', 'date');
    
          //Add the columns with the company codes
          companiesCodes.map(code => {
            dataTable.addColumn('number', code);                        
          });                   
          
          
          dataTable.addRows(mData);          

          this.config1 = new LineChartConfig('Stocks value', "VWAP value");
          this.data1 = dataTable;
          this.elementId1 = 'stocksLineChart';     
        });    
  }
}
