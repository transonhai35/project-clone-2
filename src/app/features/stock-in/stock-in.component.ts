import { Component } from '@angular/core';
import { ManageService } from 'src/app/core/manage.service';

@Component({
  selector: 'app-stock-in',
  templateUrl: './stock-in.component.html',
  styleUrls: ['./stock-in.component.scss']
})
export class StockInComponent {
  hamburgerLink = 'LeftSideBar';
  p: number = 1;

  stockIn:Array<any> = this.manageService.stockIn;

  constructor(private manageService: ManageService){}



  ngOnInit() {
  }




}
