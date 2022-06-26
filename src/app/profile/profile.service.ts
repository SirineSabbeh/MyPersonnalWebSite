import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  baseUrl="https://localhost:44346/api/"
  constructor(private http:HttpClient) { 

  }
  
  exprience() : Observable<any>{
    return this.http.get(this.baseUrl + 'Experience')
    
  }
  projects() : Observable<any>{
    return this.http.get(this.baseUrl + 'Projects')
    
  }
  skills() : Observable<any>{
    return this.http.get(this.baseUrl + 'Skillls')
    
  }
  Education() : Observable<any>{
    return this.http.get(this.baseUrl + 'Education')
    
  }
  contacts(data:any):Observable<any>{
    {
      return this.http.post(this.baseUrl+'Contact',data)
    }
  }
}
