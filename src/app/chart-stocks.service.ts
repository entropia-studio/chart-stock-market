import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {ChartStocks} from './chart-stocks';
import { resolve } from 'path';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class ChartStocksService {

  urlApi: string = 'https://api.iextrading.com/1.0/stock/market/batch?symbols=googl&types=chart&range=ytd';
  constructor(private http: HttpClient) { }

  stocksSearchValues = (): Observable<Object> => {
    return this.http.get(this.urlApi);      
  }

  /*
  stocksSearchValues = (symbols: Array<String>, range: String): Observable<ChartStocks> => {
    let observable = new Observable<ChartStocks>(() => {
      this.http.get(this.urlApi)
      .toPromise()
      .then((response) => {
        return (response as ChartStocks);
      },error => {
        reject(error);
      })
    })
    return observable;
  }
  */

}
