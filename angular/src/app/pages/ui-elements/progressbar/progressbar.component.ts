import { Component, OnInit } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { ServiceblogService } from '../../blog/blog-service.service';
@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css'],
  providers: [NgbProgressbarConfig]
})
export class ProgressbarComponent {
  height = '20px';

  constructor(private service: ServiceblogService, config: NgbProgressbarConfig) {
    this.service.isLoggedIn();    
    config.max = 100;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
  }



}
