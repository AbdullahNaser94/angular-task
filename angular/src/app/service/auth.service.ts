import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiurl = 'http://localhost:5000/login';

  constructor(private http: HttpClient) {}

  ProceedLogin(UserCred: any) {
    return this.http.post(this.apiurl, UserCred);
  }

  GetToken() {
    return localStorage.getItem('tokenAngular') || '';
  }

  HaveAccess() {
    var loggintoken = localStorage.getItem('tokenAngular') || '';
    var _extractedtoken = loggintoken.split('.')[1];
    var _atobdata = atob(_extractedtoken);
    var _finaldata = JSON.parse(_atobdata);
    return _finaldata.userId;
  }
}
