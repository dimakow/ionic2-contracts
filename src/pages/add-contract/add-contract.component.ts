import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import {ContractService} from '../../providers/contractService';
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
  aGroups: String[];

  constructor(private navCtrl: NavController,
              private contractService: ContractService,
              private alertCtrl: AlertController,
              private formBuilder : FormBuilder) {

    this.aGroups = ['Group1','Group2'];
    this.addContractForm = formBuilder.group({
      name : [''],
      amount: [''],
      group: ['']
    })
  }

  //View Lifecycle Events
  ionViewDidEnter() {
    //this.subcribeToFormChanges();
  }
  ionViewCanLeave() {
    if(this.addContractForm.touched){
      let alert = this.alertCtrl.create({
        title: 'Unsaved Changes',
        message: 'You have made some changes that were not yet saved! Save them now?',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              this.addContractForm.reset();
              this.navCtrl.pop();
            }
          },
          {
            text: 'Cancel',
            role: 'cancel'
          }
        ]
      });
      alert.present();
      return false;
    }
    else{
      return true;
    }
  }

  addContract(oForm) {
    console.log(oForm);

    this.contractService.addContract(
      oForm.value.name,
      oForm.value.amount,
      oForm.value.group,
    )
    this.addContractForm.reset();
  }

  //Custom functions
  /*
  subcribeToFormChanges() {
      // initialize stream
      const oFormChanges = this.addContractForm.valueChanges;

      // subscribe to the stream
      oFormChanges.subscribe((x) => {console.log(this)}

      );
  }*/



}
