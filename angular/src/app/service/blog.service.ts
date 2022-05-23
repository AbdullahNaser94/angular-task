import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  apiurl = 'http://localhost:5000/blog';

  constructor(private http: HttpClient) {}

  GetAllBlog(): Observable<any> {
    return this.http.get(this.apiurl);
  }

  getBlogById(id: number): Observable<any> {
    return this.http.get(this.apiurl + '/' + id);
  }

  createBlog(saveData: any): Observable<any> {
    return this.http.post(this.apiurl, saveData);
  }

  addUpvote(id: any, userIdData: any): Observable<any> {
    return this.http.put(this.apiurl + `/${id}/` + 'upvote', userIdData);
  }

  addDownvote(id: any, userIdDataDownvote: any): Observable<any> {
    return this.http.put(
      this.apiurl + `/${id}/` + 'downvote',
      userIdDataDownvote
    );
  }
}
