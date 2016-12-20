import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello AddContractPage Page');
  }

}
