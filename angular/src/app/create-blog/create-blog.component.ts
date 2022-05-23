import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { BlogService } from '../service/blog.service';
@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css'],
})
export class CreateBlogComponent implements OnInit {
  dataCreateBlog: any;
  message = '';

  constructor(
    private servi: AuthService,
    private service: BlogService,
    private route: Router
  ) {}

  userId: any = this.servi.HaveAccess();

  ngOnInit(): void {}

  newBlog = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    userId: new FormControl(this.userId, Validators.required),
  });

  createBlog() {
    if (this.newBlog.valid) {
      this.service.createBlog(this.newBlog.value).subscribe((result) => {
        if (result != null) {
          this.dataCreateBlog = result;
          this.route.navigate(['']);
        }
      });
    } else {
      this.message = 'Please Enter valid data';
    }
  }
}
