import { Component, Input, OnChanges } from '@angular/core';

import { GoogleLineChartService } from '../google-line-chart.service';
import { LineChartConfig } from '../line-char-config-class';

declare var google: any;


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],  
})
export class LineChartComponent implements OnChanges {

  @Input() data: any;
  @Input() config: LineChartConfig;
  @Input() elementId: string;

  constructor(private _lineChartService: GoogleLineChartService) { }
  
  ngOnChanges(): void{    
    this._lineChartService.BuildLineChart(this.elementId, this.data, this.config); 
  }

}
