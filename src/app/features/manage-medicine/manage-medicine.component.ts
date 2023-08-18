import { Component} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ValidatorFn,  } from '@angular/forms';
import { ManageService } from 'src/app/core/manage.service';
import { FORMMEDICINE } from './form-medicine';
import { FormAddState } from 'src/app/core/form-state.service';



@Component({
  selector: 'app-manage-medicine',
  templateUrl: './manage-medicine.component.html',
  styleUrls: ['./manage-medicine.component.scss']
})
export class ManageMedicineComponent {
  hamburgerLink = 'LeftSideBar';
  manageMedicine:Array<any> = this.manageService.medicine;
  formGroup:FormGroup;
  formState:boolean = false;
  formMedicine = FORMMEDICINE;
  p: number = 1;

  constructor(private manageService : ManageService,
              private formBuilder: FormBuilder,
              private formAddStateService: FormAddState

    ) {
      this.formGroup = new FormGroup({
        medicineName: new FormControl('', [Validators.required]),
        producer: new FormControl('', [Validators.required]),
        medicineGroup: new FormControl('', [Validators.required]),
        quantity: new FormControl('', [Validators.required]),
        price: new FormControl('', [Validators.required]),
        unit: new FormControl('', [Validators.required]),
        ingredients: new FormControl('', [Validators.required]),
        dosage: new FormControl('', [Validators.required]),
        instructions: new FormControl('', [Validators.required]),
        date: new FormControl('', [Validators.required]),
        uses: new FormControl('', [Validators.required]),
      });

      this.formAddStateService.formAddStateObs.subscribe(state => {
        this.formState = state;
      })

    }


  onClickBack() {
    console.log('back')
  }


  onClickAdd() {
    if(this.formState === false){this.formState = true;
    this.formAddStateService.formAddState = this.formState;
  }
  }

  onClickClose() {
    if(this.formState === true){
      this.formState = false;
      this.formAddStateService.formAddState = this.formState;
    }
  }


  // email = new FormControl('', [Validators.required, Validators.email]);

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }



}
