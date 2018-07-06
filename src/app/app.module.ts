import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ChartStocksService} from './chart-stocks.service';
import {GoogleChartBaseService} from './google-chart-base.service';
import { LineChartComponent } from './line-chart/line-chart.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {GoogleLineChartService} from './google-line-chart.service';


@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,    
  ],
  providers: [ChartStocksService,
              GoogleChartBaseService,
              GoogleLineChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
