import { Component, OnInit } from '@angular/core';
import { BlogService } from '../service/blog.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  readData: any;
  dataUpvote: any;
  dataDownvote: any;

  constructor(
    private servi: AuthService,
    private service: BlogService,
    private route: ActivatedRoute
  ) {
    this.GetAllBlog();
  }

  userId: any = this.servi.HaveAccess();

  ngOnInit(): void {}
  GetAllBlog() {
    this.service.GetAllBlog().subscribe((res) => {
      this.readData = res.result;
    });
  }

  newUpvote = new FormGroup({
    userId: new FormControl(this.userId, Validators.required),
  });

  addUpvote(id: any) {
    if (this.newUpvote.valid) {
      this.service.addUpvote(id, this.newUpvote.value).subscribe((result) => {
        if (result != null) {
          this.GetAllBlog();
          this.dataUpvote = result;
        }
      });
    }
  }

  newDownvote = new FormGroup({
    userId: new FormControl(this.userId, Validators.required),
  });

  addDownvote(id: any) {
    if (this.newDownvote.valid) {
      this.service
        .addDownvote(id, this.newDownvote.value)
        .subscribe((result) => {
          if (result != null) {
            this.GetAllBlog();
            this.dataDownvote = result;
          }
        });
    }
  }
}
