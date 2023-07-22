import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';
import { MEDICENEINFOR } from 'src/app/shared/utils/manage-medicine';
import { BILLMEDICINE } from '../shared/utils/sale-medicine';
import { STOCKIN } from '../shared/utils/stock-in';

@Injectable({
  providedIn: 'root'
})
export class ManageService {

  medicine = MEDICENEINFOR;
  bill = BILLMEDICINE;
  stockIn = STOCKIN;
  private destinations$: BehaviorSubject<[]> = new BehaviorSubject<[]>([]);
  destinationsObs: Observable<[]> = this.destinations$.asObservable()


}
