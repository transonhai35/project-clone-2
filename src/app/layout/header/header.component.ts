import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router){}

  @Output() onClickhamburger = new EventEmitter<void>();
  @Output() onClickNotify = new EventEmitter<void>();

  @Input() routerLinkHamburger = ''
  @Input() headerTitle = '';

  navigate(path: string) {
    this.router.navigateByUrl(path);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }

}
