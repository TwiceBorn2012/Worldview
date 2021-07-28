import { Component, OnInit } from '@angular/core';
import { ServiceblogService } from '../blog-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../blog-type';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  id: any;
  blogDetail: Blog = new Blog();

  constructor(activatedRouter: ActivatedRoute, public service: ServiceblogService, public router: Router) {
    this.id = activatedRouter.snapshot.paramMap.get('id');
    this.service.isLoggedIn();
  }

  ngOnInit(): void {
    if (this.service.Blogs.length === 0)
      this.service.getBlog().subscribe((d: any) => (this.blogDetail = d.filter((x: any) => x.id === +this.id)[0]));
    else
      this.blogDetail = this.service.Blogs.filter((x: any) => x.id === +this.id)[0];
  }

  loginClick() {
    this.router.navigate([('/login')]);
  }

  newPost() {
    this.router.navigate([('/post')]);
  }

  editPost() {
    if(this.service.loginStatusService)
    this.router.navigate([('/editPost'), this.blogDetail?.id]);
    else
    this.router.navigate([('/login')]);

    
  }

}
