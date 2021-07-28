import { Component, OnInit } from '@angular/core';
import { ServiceblogService } from '../../blog/blog-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private service: ServiceblogService) {
    this.service.isLoggedIn();    
  }

  ngOnInit(): void {
  }

}
