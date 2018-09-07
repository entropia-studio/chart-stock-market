import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable,throwError,of} from 'rxjs';
import {ChartStocks} from './chart-stocks';
import {Company} from './company';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class ChartStocksService {    
  

  urlApiStocks: string = 'https://api.iextrading.com/1.0/stock/market/batch?types=quote,chart';
  urlApiCompanies: string = location.protocol + '//localhost:8080/api';  


  constructor(
    private http: HttpClient,   
  ){ }

  getCompanies = ():Observable<Company[]> => {    
    console.log('Location: '+location.host);
    return this.http.get<Company[]>(this.urlApiCompanies + '/stocks')
      .pipe(        
        catchError(this.handleError('getCompanies',[]))
      )
      
  }

  stocksSearchValues = (symbols: Array<String>, range: String): Observable<ChartStocks> => {
    const mUrl = this.urlApiStocks + "&symbols= " + symbols.join() + "&range=" + range;      
    return this.http.get<ChartStocks>(mUrl);           
  }

  deleteCompany = (company: Company) : Observable<Company> => {    
    const mUrl = this.urlApiCompanies + '/company/delete/' + company.code;    
    return this.http.delete<Company>(mUrl)
      .pipe(
        catchError(this.handleError<Company>('Error deleting company'))
      )   
  }

  addCompany = (company: Company) : Observable<Company> => {
    const mUrl = this.urlApiCompanies + '/company/add';        
    return this.http.post<Company>(mUrl,company,httpOptions);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
