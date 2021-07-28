import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceblogService } from '../../pages/blog/blog-service.service';

import { AuthenticationService } from '../../jwt/_services/authentication.service';

@Component({
  selector: 'app-banner-navigation',
  templateUrl: './banner-navigation.component.html',
  styleUrls: ['./banner-navigation.component.css'],
})
export class BannerNavigationComponent implements OnInit {
  elementsMenu = [
    {
      Name: 'Accordion',
      link: '/accordion',
    },
    {
      Name: 'Alert',
      link: '/alert',
    },

    {
      Name: 'Carousel',
      link: '/carousel',
    },
    {
      Name: 'Dropdowns',
      link: '/dropdown',
    },
    {
      Name: 'Modal',
      link: '/modal',
    },
    {
      Name: 'Pagination',
      link: '/pagination',
    },
    {
      Name: 'Popover & Tooltip',
      link: '/popovertooltip',
    },
    {
      Name: 'Progressbar',
      link: '/progress',
    },
    {
      Name: 'Rating',
      link: '/rating',
    },
    {
      Name: 'Tab',
      link: '/tab',
    },
    {
      Name: 'Timepicker',
      link: '/timepicker',
    },
    {
      Name: 'Button',
      link: '/button',
    },
  ];

  logoutStatus = false;

  constructor(public service: ServiceblogService, public router: Router, private authenticationService: AuthenticationService) {}

  ngOnInit(): void {}

  loginClick() {
    this.router.navigate(['/login']);
  }

  newPost() {
    this.router.navigate(['/post']);
  }

  fun() {
    this.logoutStatus = !this.logoutStatus;
  }

  logoutClick() {   
    this.service.loginStatusService = false;
    this.logoutStatus = false;
    this.authenticationService.logout();
    this.router.navigate(['']);
  }
}
