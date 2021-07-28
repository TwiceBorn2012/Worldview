import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Blog } from '../blog-type';
import { ServiceblogService } from '../blog-service.service';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
})
export class NewPostComponent implements OnInit {
  img: any = '';
  b: Blog = new Blog();
  @ViewChild('content', { static: false }) private content: any;


  constructor(public service: ServiceblogService, public router: Router, private modalService: NgbModal) {
    this.service.isLoggedIn();
  }

  ngOnInit(): void { }

  submit(data: NgForm) {
    this.b.id =
      Math.max.apply(
        Math,
        this.service.Blogs.map(function (o) {
          return o.id;
        })
      ) + 1;
    this.b.heading = data.value.heading;
    this.b.subHeading = data.value.subheading;
    this.b.blogDetail = data.value.textBody;
    this.b.image = this.img;
    this.b.blogDate = new Date().toDateString();
    this.service.addPost(this.b);
    this.open(this.content);   
  }

  preview(files: any) {
    if (files.length === 0) {
      return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.img = reader.result;
    };
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {     
    }, (reason) => {     
    });
  }



  fclick(){
    this.modalService.dismissAll();
    this.router.navigate(['/']);
  }
}
