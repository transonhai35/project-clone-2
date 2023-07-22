import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  constructor(private location: Location, private router: Router) {}

  onClickhamburger() {
      this.router.navigateByUrl('LeftSideBar');
  }

  hamburgerLink = 'LeftSideBar';

}
