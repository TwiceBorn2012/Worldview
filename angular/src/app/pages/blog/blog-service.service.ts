import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceblogService {

  Blogs: any[] = [];
  loginStatusService = false;


  constructor(public http: HttpClient) {
  }

  public getBlog(): Observable<any> {
    this.http.get<any>('https://localhost:44349/Blogs').subscribe((d: any) => (this.Blogs = d));;
    return this.http.get<any>('https://localhost:44349/Blogs');
  }


  public addPost(bl: any) {
    this.Blogs.splice(0, 0, bl);
  }

  public deletePost(id: number) {
    this.Blogs = this.Blogs.filter(b => b.id !== id);
  }

  isLoggedIn() {
    if (localStorage.getItem('currentUser') !== null) {
      this.loginStatusService = true;
    }
  }
}
