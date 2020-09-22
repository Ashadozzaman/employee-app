import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService {

  //here define api
  apiURL = 'http://localhost/employees/public/api';

  constructor(private http: HttpClient) { }
  
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // HttpClient API get() method employees list
  getEmployees(): Observable<Employee> {
    return this.http.get<Employee>(this.apiURL + '/get/employees')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  // HttpClient API get() method employees list
  getCompanies(): Observable<Employee> {
    return this.http.get<Employee>(this.apiURL + '/get/companies')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method employees list
  getEmployeeDetails(id): Observable<Employee> {
    return this.http.get<Employee>(this.apiURL + '/get/employee/details/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

   // HttpClient API get() method employees list
   getEmployee(id): Observable<Employee> {
    return this.http.get<Employee>(this.apiURL + '/get/employee/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API put() method => Update employee
  updateEmployee(id, employee): Observable<Employee> {
    return this.http.put<Employee>(this.apiURL + '/edit/employee/' + id, JSON.stringify(employee), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

   // HttpClient API post() method => Create employee
   createEmployee(employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiURL + '/add/employee', JSON.stringify(employee), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete employee
  deleteEmployee(id){
    return this.http.delete<Employee>(this.apiURL + '/delete/employee/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
