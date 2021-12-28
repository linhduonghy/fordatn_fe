import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, filter } from 'rxjs/operators';
@Injectable({providedIn: 'root'})
export class SummarizerService {

  private baseUrl = 'http://2d37-35-221-189-196.ngrok.io/'
  constructor(private http: HttpClient) { }
  
  public summarize(text: string): Observable<any> {
    const data = {text: text}
    return this.http.post(`${this.baseUrl}/summary`, data).pipe(
      filter((response: any) => response && response.code == 200),
      catchError(err => {
        console.log(err)
        return EMPTY
      })
    )
  }
}