import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ServiceblogService } from '../../blog/blog-service.service';

export interface IAlert {
  id: number;
  type: string;
  message: string;
}

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() public alerts: Array<IAlert> = [];

  private backup: Array<IAlert>;


  constructor(private service: ServiceblogService) {

    this.service.isLoggedIn();    

    this.alerts.push(
      {
        id: 1,
        type: 'success',
        message: 'This is an success alert'
      },
      {
        id: 2,
        type: 'info',
        message: 'This is an info alert'
      },
      {
        id: 3,
        type: 'warning',
        message: 'This is a warning alert'
      },
      {
        id: 4,
        type: 'danger',
        message: 'This is a danger alert'
      }
    );
    
    this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
  }

  private _success = new Subject<string>();

  staticAlertClosed = false;
  successMessage: string | null = null;

  public closeAlert(alert: IAlert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

  public reset() {
    this.alerts = this.backup.map((alert: IAlert) => Object.assign({}, alert));
  }

  ngOnInit(): void {
    setTimeout(() => (this.staticAlertClosed = true), 20000);

    this._success.subscribe(message => (this.successMessage = message));
    this._success.pipe(debounceTime(5000)).subscribe(() => (this.successMessage = null));
  }

  public changeSuccessMessage() {
    this._success.next(`${new Date()} - Message successfully changed.`);
  }

}
