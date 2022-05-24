import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  responsedata: any;
  message = '';

  constructor(private service: RegisterService, private route: Router) {}

  ngOnInit(): void {}

  register = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    password: new FormControl('', Validators.required),
  });

  SaveCustomer() {
    if (this.register.valid) {
      this.service.SaveCustomer(this.register.value).subscribe((result) => {
        console.log(result);

        if (result != null) {
          this.responsedata = result;
          this.route.navigate(['login']);
          this.message = 'Customer saved successfully.';
        }else {
          this.message = 'Please Enter valid data';
        }
      });
    } 
  }
}
