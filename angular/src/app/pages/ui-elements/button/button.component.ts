import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceblogService } from '../../blog/blog-service.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  public checkboxGroupForm: FormGroup = Object.create(null);

  public radioGroupForm: FormGroup = Object.create(null);

  constructor(private service: ServiceblogService, private formBuilder: FormBuilder) {
    this.service.isLoggedIn();    
  }

  model = {
    left: true,
    middle: false,
    right: false
  };

  model1 = 1;

  ngOnInit() {
    this.checkboxGroupForm = this.formBuilder.group({
      left: true,
      middle: false,
      right: false
    });

    this.radioGroupForm = this.formBuilder.group({
      model: 1
    });
  }

}
