
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormAddState {
  private formAddStateSubject = new BehaviorSubject<boolean>(false)
  public formAddStateObs = this.formAddStateSubject.asObservable();
  private formSaleStateSubject = new BehaviorSubject<boolean>(false)
  public formSaleStateObs = this.formSaleStateSubject.asObservable();
  constructor() { }
  public set formAddState(state: boolean) {
    this.formAddStateSubject.next(state);
  }
  public set formSaleState(state: boolean) {
    this.formSaleStateSubject.next(state);
  }
}
