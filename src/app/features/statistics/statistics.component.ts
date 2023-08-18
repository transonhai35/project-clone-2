import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ValidatorFn,  } from '@angular/forms';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {
  hamburgerLink = 'LeftSideBar';
  formGroup:FormGroup;

  constructor(){
    this.formGroup = new FormGroup({
      totalDate: new FormControl('',Validators.required),
    })
  }
}
