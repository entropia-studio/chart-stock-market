import { Injectable } from '@angular/core';

declare var google: any;


@Injectable({
  providedIn: 'root'
})

export class GoogleChartBaseService {

  constructor() {
    google.charts.load('current', {'packages':['corechart']});
  }

  

  protected buildChart(data: any, chartFunc: any, options: any) : void {        
    var func = (chartFunc, options) => {           
      chartFunc().draw(data, options); 
    };   
    var callback = () => func(chartFunc, options);
    
    google.charts.setOnLoadCallback(callback);
  }

  public getDataTable() : any {
    return new google.visualization.DataTable();
  }

}
