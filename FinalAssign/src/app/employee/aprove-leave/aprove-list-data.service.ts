import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { AproveList } from './aprove-list.model';
import { AprovePut } from './aprove-put.model';

@Injectable({
  providedIn: 'root'
})
export class AproveListDataService {

  private url = 'http://localhost:51597/api/Approves';
  
  constructor(private http: HttpClient, private route:Router) { }
  
  emp:AproveList;
  emplist:Observable<AproveList[]>;
  addEmployeeLeave(e:AprovePut):void{
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    const as=JSON.stringify(e);
    this.http.post(this.url,as,{headers: headers}).subscribe(
      ()=>{
        return this.getEmployeeLeaves();
      }
    );
this.route.navigate(['/employeeList']);
  }
  getEmployeeLeaves():Observable<AproveList[]>{
    return this.http.get<AproveList[]>(this.url).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  getEmployeeLeave(id:number):Observable<AproveList>{
    const eurl=`http://localhost:51597/api/Approves/${id}`;
    return this.http.get<AproveList>(eurl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
