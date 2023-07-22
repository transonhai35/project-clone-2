import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HOMEMENU } from '../shared/utils/home-menu';
import { Location } from '@angular/common';


@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.scss']
})
export class LeftSideBarComponent {

  homeMenu = HOMEMENU;
  constructor(private router: Router,private location: Location) { }

  ngOnInit() {}

  backClicked() {
    this.location.back();
  }

  navigate(path: string) {
    this.router.navigateByUrl(path);
  }

}
