import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../components/models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient ) { }

  apiUrl = "http://localhost:3000/admin";


   // 1.post data
   postEmployees(data:any):Observable<any>{
    return this._http.post(this.apiUrl, data);
  }

  // 2.get employee
  getEmployees():Observable<any>{
    return this._http.get(this.apiUrl);
  };

  getSingleData(id:any):Observable<any>{
    let ids = id;
    return this._http.get(`${this.apiUrl}/${ids}`)
  }

  // 4.delete
  deleteData(id:any):Observable<any>{
    let ids = id;
    return this._http.delete(`${this.apiUrl}/${ids}`);
  }

} 
