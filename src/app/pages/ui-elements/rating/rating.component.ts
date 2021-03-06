import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ServiceblogService } from '../../blog/blog-service.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styles: [
    `
			.star {
				font-size: 1.5rem;
				color: #b0c4de;
			}
			.filled {
				color: #1e90ff;
			}
			.heart {
				position: relative;
				display: inline-block;
				font-size: 3rem;
				color: #d3d3d3;
			}
			.full {
				color: red;
			}
			.half {
				position: absolute;
				display: inline-block;
				overflow: hidden;
				color: red;
			}
			.bad {
			color: #deb0b0;
		}
		.filled.bad {
			color: #ff1e1e;
		}
		`
  ]
})
export class RatingComponent  {

	constructor(private service: ServiceblogService) {
		this.service.isLoggedIn();    
	  }

  currentRate = 8;
  currentRate2 = 2;
  selected = 0;
  hovered = 0;
  readonly = false;

  ctrl = new FormControl(null, Validators.required);

  ngOnInit(): void {
  }

  toggle() {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }

}
