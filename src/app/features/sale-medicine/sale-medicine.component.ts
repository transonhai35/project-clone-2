import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BILLMEDICINE } from 'src/app/shared/utils/sale-medicine';
import { MatSort } from '@angular/material/sort';
import { ManageService } from 'src/app/core/manage.service';
import { FormAddState } from 'src/app/core/form-state.service';
import { FormBuilder, FormControl, FormGroup, Validators, ValidatorFn,  } from '@angular/forms';
import { FORMSALE } from './form-sale';
import { FORMADD } from './form-add';

@Component({
  selector: 'app-sale-medicine',
  templateUrl: './sale-medicine.component.html',
  styleUrls: ['./sale-medicine.component.scss']
})
export class SaleMedicineComponent {
  hamburgerLink = 'LeftSideBar';
  bill:Array<any> = this.manageService.bill;
  formGroup:FormGroup;
  formAddState:boolean = false;
  formSaleState:boolean = false;
  formSale = FORMSALE;
  formAdd = FORMADD;

  constructor(private manageService : ManageService,
              private formStateService: FormAddState
    ){
      this.formGroup = new FormGroup({
        medicineName: new FormControl('', [Validators.required]),
        quantity: new FormControl('', [Validators.required]),
        personName: new FormControl('', [Validators.required]),
        total: new FormControl('', [Validators.required]),
        tax: new FormControl('', [Validators.required]),
        date: new FormControl('', [Validators.required]),
      });

      this.formStateService.formAddStateObs.subscribe(state => {
        this.formAddState = state;
      })
      this.formStateService.formSaleStateObs.subscribe(state => {
        this.formSaleState = state;
      })

    }


  displayedColumns: string[] = ['name', 'quantity', 'price','tax','total','date','person','action'];
  dataSource = new MatTableDataSource<Array<any>>(this.bill);
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  onClickAdd() {
    if(this.formAddState === false){
      this.formAddState = true;
      this.formStateService.formAddState = this.formAddState;
  }
  }

  onClickClose() {
    if(this.formAddState === true){
      this.formAddState = false;
      this.formStateService.formAddState = this.formAddState;
    }
  }

  onClickSale() {
    if(this.formSaleState === false){
      this.formSaleState = true;
      this.formStateService.formAddState = this.formSaleState;
    }
  }

  onClickCloseSale() {
    if(this.formSaleState === true){
      this.formSaleState = false;
      this.formStateService.formSaleState = this.formSaleState;
    }
  }


}
