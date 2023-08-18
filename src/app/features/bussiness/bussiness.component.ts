import { Component} from '@angular/core';
import { ManageService } from 'src/app/core/manage.service';

@Component({
  selector: 'app-bussiness',
  templateUrl: './bussiness.component.html',
  styleUrls: ['./bussiness.component.scss']
})
export class BussinessComponent {
  hamburgerLink = 'LeftSideBar';

  bussiness:Array<any> = this.manageService.bussiness;
  p:number = 1;


  constructor(private manageService: ManageService){}


}
