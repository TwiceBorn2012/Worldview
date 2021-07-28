import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceblogService } from '../blog/blog-service.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../../jwt/_services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginStatus: boolean = false;



  constructor(public service: ServiceblogService, public router: Router, private authenticationService: AuthenticationService) {

    if (this.service.loginStatusService)
      this.router.navigate([('')]);

  }

  ngOnInit(): void {
  }

  submit(data: NgForm) {

    let email = data.form.controls.email.value;
    let p = data.form.controls.pass.value;
    this.login(email, p);
  }


  public login(email: string, pass: string){

    this.authenticationService.login(email, pass)
      .pipe(first()).subscribe(
        (data: any) => {
          // this.router.navigate([this.returnUrl]);
          this.service.loginStatusService = true;
          this.router.navigate([('')]);
          return true;
        },
        (error: any) => {
          this.loginStatus = true;
        });

  }
  ////////////////////////////////////////////////





}
