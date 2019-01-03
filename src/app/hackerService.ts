import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable ,  of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Story } from './dtos/story';

@Injectable()
export class HackerService {
  constructor(private http: HttpClient) { }


  getIds(): Observable<number[]> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let httpOptions = {
      headers: headers
    };
    httpOptions.headers.append('Content-Type', 'application/json');
    let url = 'https://hacker-news.firebaseio.com/v0/topstories.json';
    var res = this.http.get<number[]>(url,httpOptions).pipe(
      tap((cre: number[]) => this.log(`added employee w/ Success=${cre.length}`)),
      catchError(this.handleError<number[]>('Error in login')));
    return res;
  }

  getStoryById(id): Observable<Story> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    let httpOptions = {
      headers: headers
    };
    let url = 'https://hacker-news.firebaseio.com/v0/item/'+id+'.json?print=pretty';
    var res = this.http.get<Story>(url,httpOptions).pipe(
      tap((cre: Story) => this.log(`added employee w/ Success=${cre.id}`)),
      catchError(this.handleError<Story>('Error in login')));
    return res;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string) {
    //
  }

}
