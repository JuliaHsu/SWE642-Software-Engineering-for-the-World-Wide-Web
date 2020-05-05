import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export default class UserService {
 
  constructor(private http: HttpClient) { }
 
  public getUser(): Observable<User[]> {
    const url = 'http://localhost:8080/demorest/webapi/aliens';
    return this.http.get<User[]>(url);
  }
}