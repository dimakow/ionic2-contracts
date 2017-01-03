import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

/*
  Generated class for the AddContract page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'add-contract',
  templateUrl: 'add-contract.component.html'
})
export class AddContractComponent {

  addContractForm : FormGroup;

  constructor(public navCtrl: NavController,
              public formBuilder : FormBuilder) {
    this.addContractForm = formBuilder.group({
      Name : [''],
      Amount: [''],
      Group: ['']
    })
  }

  //View Lifecycle Events
  ionViewDidEnter() {
    this.subcribeToFormChanges();
  }


  //Custom functions
  subcribeToFormChanges() {
      // initialize stream
      const myFormValueChanges$ = this.addContractForm.valueChanges;

      // subscribe to the stream
      myFormValueChanges$.subscribe(
        x => console.log(x)
      );
  }



}
