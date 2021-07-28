import { Component, OnInit } from '@angular/core';
import { ServiceblogService } from '../../blog/blog-service.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  public isCollapsed = false;
  collapsed = true;

  constructor(private service: ServiceblogService) {
    this.service.isLoggedIn();    
  }

  ngOnInit(): void {
  }

}
