import { Injectable } from '@angular/core';
import {GoogleChartBaseService} from './google-chart-base.service';
import {LineChartConfig} from './line-char-config-class';

declare var google: any;


@Injectable({
  providedIn: 'root'
})
export class GoogleLineChartService extends GoogleChartBaseService{

  constructor() {
    super();
  }

  public BuildLineChart(elementId: string, data: any, config: LineChartConfig) : void {  
    var chartFunc = () => {       
      return new google.visualization.LineChart(document.getElementById(elementId));
    };  

    var options = {                           
      tooltip: {
        isHtml: false,        
        showColorCode: true,
        textStyle: {                
          color: '#212121',
          fontSize: 11,                         
        },        
      },      
      title: config.title,
      subtitle: config.subtitle,
      backgroundColor: '#607D8B',
      fontName: 'Roboto',            
      hAxis: {
        textStyle: {                
          color: '#FFFFFF',
          fontSize: 12,                
        },              
      },
      vAxis: {
        textStyle: {                
          color: '#FFFFFF',
          fontSize: 12,                
        },
        format:'# $'
      },
      titleTextStyle: {
        color: '#FFFFFF',
        fontSize: 12,              
      },
      focusTarget: 'category',
      
    };      
      
    
    this.buildChart(data, chartFunc, options);
  }

}
