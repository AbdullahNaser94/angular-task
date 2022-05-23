import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  apiurl = 'http://localhost:5000/users';

  constructor(private http: HttpClient) {}

  SaveCustomer(customedata: any) {
    return this.http.post(this.apiurl, customedata);
  }
}
