import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import {ChartStocks} from './chart-stocks';
import {Company} from './company';
import { HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ChartStocksService {  

  urlApiStocks: string = 'https://api.iextrading.com/1.0/stock/market/batch?types=quote,chart';
  urlApiCompanies: string = 'http://localhost:8080/api'; 
  constructor(private http: HttpClient) { }

  getCompanies = ():Observable<Company[]> => {    
    return this.http.get<Company[]>(this.urlApiCompanies + '/stocks');
  }

  stocksSearchValues = (symbols: Array<String>, range: String): Observable<ChartStocks> => {
    this.urlApiStocks += "&symbols= " + symbols.join() + "&range=" + range;    
    return this.http.get<ChartStocks>(this.urlApiStocks);           
  }

  deleteCompany = (companyCode: string) : Observable<{}> => {
    this.urlApiCompanies = 'http://localhost:8080/api/company/delete/' + companyCode
    console.log(this.urlApiCompanies);
    return this.http.delete(this.urlApiCompanies)
      .pipe(
        //catchError(this.handleError())
      )   
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

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
