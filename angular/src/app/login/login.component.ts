import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  responsedata: any;
  message = '';

  constructor(private service: AuthService, private route: Router) {}

  Login = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  ngOnInit(): void {}

  ProceedLogin() {
    if (this.Login.valid) {
      this.service.ProceedLogin(this.Login.value).subscribe((result) => {
        if (result != null) {
          console.log(result);
          this.responsedata = result;
          localStorage.setItem('tokenAngular', this.responsedata.token);
          this.route.navigate(['']);
        }else {
          this.message = 'Please Enter valid data';
        }
      });
    }
  }
}
