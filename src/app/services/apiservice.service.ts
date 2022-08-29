import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../components/models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient ) { }

  apiUrl = "http://localhost:3000/user";


   // 1.post data
   postEmployees(data:any):Observable<any>{
    return this._http.post(this.apiUrl, data);
  }

  // edit employee
  getEmployees(){
    return this._http.get<Employee>(this.apiUrl);
  };

  // postEmployees(employee:Employee){
  //   return this._http.post<Employee>(this.apiUrl, employee);
  // }

} 
