import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { employee } from './employee.model';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  private url = 'http://localhost:51597/api/Employees';
  
  constructor(private http: HttpClient, private route:Router) { }
  
  emp:employee;
  emplist:Observable<employee[]>;
  addEmployee(e:employee):void{
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    const as=JSON.stringify(e);
    console.log(as);
    this.http.post(this.url,as,{headers: headers}).subscribe(
      ()=>{
        return this.getEmployees();
      }
    );
    this.route.navigate(['/adminArea/employeeList']);
    }

  deleteEmployee(id:number):void{
    if(confirm("Delete this employee?")){
      const durl=`http://localhost:51597/api/Employees/${id}`;
      this.http.delete(durl,{ responseType: 'text' }).subscribe(
        ()=>{
          return this.getEmployees();
        }
      );
    }
  }


  getEmployees():Observable<employee[]>{
    return this.http.get<employee[]>(this.url).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  
  getEmployee(id:number):Observable<employee>{
    const eurl=`http://localhost:51597/api/Employees/${id}`;
    return this.http.get<employee>(eurl).pipe(
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
