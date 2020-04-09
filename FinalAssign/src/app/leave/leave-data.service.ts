import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { leave } from './leave.model';


@Injectable({
  providedIn: 'root'
})
export class LeaveDataService {
  private url = 'http://localhost:51597/api/Leaves';
  constructor(private http: HttpClient, private route:Router) { }

  emp:leave;
  emplist:Observable<leave[]>;
  addLeave(e:leave):void{
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    const as=JSON.stringify(e);
    console.log(as);
    this.http.post(this.url,as,{headers: headers}).subscribe(
      ()=>{
        return this.getLeaves();
      }
    );
    this.route.navigate(['/adminArea/leaveList']);
    }

  deleteLeave(id:number):void{
    if(confirm("Delete this leave?")){
      const durl=`http://localhost:51597/api/Leaves/${id}`;
      this.http.delete(durl,{ responseType: 'text' }).subscribe(
        ()=>{
          return this.getLeaves();
        }
      );
    }
  }


  getLeaves():Observable<leave[]>{
    return this.http.get<leave[]>(this.url).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  
  getLeave(id:number):Observable<leave>{
    const eurl=`http://localhost:51597/api/Leaves/${id}`;
    return this.http.get<leave>(eurl).pipe(
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
