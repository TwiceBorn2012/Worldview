import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { ServiceblogService } from '../../blog/blog-service.service';

@Component({
  selector: 'app-popovertooltip',
  templateUrl: './popovertooltip.component.html',
  encapsulation: ViewEncapsulation.None,
	styles: [
		`
			.card {
				overflow: hidden;
			}
			.my-custom-class {
				font-size: 125%;
			}
			.my-custom-class.tooltip > .tooltip-inner {
				background-color: darkgreen;
			}
			.my-custom-class.tooltip .arrow::before {
				border-top-color: darkgreen;
			}
		`
	]
})
export class PopovertooltipComponent {

	constructor(private service: ServiceblogService) {
		this.service.isLoggedIn();    
	  }

	greeting = {};

	name = 'World';
	lastShown: Date = new Date();
	lastHidden: Date = new Date();
	@ViewChild('p', { static: true }) public popover = Object.create(null);

	public changeGreeting(greeting: any): void {
		const isOpen = this.popover.isOpen();
		this.popover.close();
		if (greeting !== this.greeting || !isOpen) {
			this.greeting = greeting;
			this.popover.open(greeting);
		}
	}

	toggleWithGreeting(tooltip: NgbTooltip, greeting: any) {
		if (tooltip.isOpen()) {
			tooltip.close();
		} else {
			tooltip.open({ greeting });
		}
	}

	recordShown() {
		this.lastShown = new Date();
	}

	recordHidden() {
		this.lastHidden = new Date();
	}

}
