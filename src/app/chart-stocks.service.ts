import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {ChartStocks} from './chart-stocks';

@Injectable({
  providedIn: 'root'
})
export class ChartStocksService {

  urlApi: string = 'https://api.iextrading.com/1.0/stock/market/batch?types=quote,chart';
  constructor(private http: HttpClient) { }

  stocksSearchValues = (symbols: Array<String>, range: String): Observable<ChartStocks> => {
    this.urlApi += "&symbols= " + symbols.join() + "&range=" + range;    
    return this.http.get<ChartStocks>(this.urlApi);
        
            
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
