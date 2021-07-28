import { Component, OnInit } from '@angular/core';
import { ServiceblogService } from '../../blog/blog-service.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  page = 4;
  page2 = 1;
  currentPage = 3;
  disablepage = 3;
  isDisabled = true;
  pagecustom = 4;

  constructor(private service: ServiceblogService) {
    this.service.isLoggedIn();    
  }

  ngOnInit(): void {
  }

  getPageSymbol(current: number) {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G'][current - 1];
  }

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }

}
