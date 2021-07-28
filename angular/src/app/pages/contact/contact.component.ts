import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceblogService } from '../blog/blog-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


class Contact {
  name: string = '';
  email: string = '';
  phone: string = '';
  message: string = '';
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  img = 'assets/images/contact/2.jpg';
  title = 'Are you happy with what we offer? Grab your WrapKit Copy Now';
  subTitle = ' Yeah ! Its pretty cool about what you are offering and i starterd to feel in love with your Amazing UI Kit. I want it Yea!';

  @ViewChild('content', { static: false }) private content: any;

  con: Contact = new Contact();


  contacts = [
    {
      type: 'Address',
      img: 'assets/images/contact/icon1.png',
      contact1: '601 Sherwood Ave.San Bernandino',
      contact2: ''
    },
    {
      type: 'Phone',
      img: 'assets/images/contact/icon2.png',
      contact1: '251 546 9442',
      contact2: '630 446 8851'
    },
    {
      type: 'Email',
      img: 'assets/images/contact/icon3.png',
      contact1: 'info@wrappixel.com',
      contact2: '123@wrappixel.com'
    },
  ];

  constructor(private service: ServiceblogService, public router: Router, private modalService: NgbModal) {
    this.service.isLoggedIn();
  }

  ngOnInit(): void {
  }

  submit(contact: NgForm) {
    this.con.name = contact.value.name;
    this.con.email = contact.value.email;
    this.con.phone = contact.value.phone;
    this.con.message = contact.value.message;
    this.open(this.content);
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    }, (reason) => {
    });
  }



  fclick(con:NgForm) {

    this.modalService.dismissAll();
    con.reset();
   
  }

}
