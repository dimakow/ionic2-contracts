import {Component, ViewChild} from '@angular/core';
import {Content, NavController} from 'ionic-angular';
import {AddContractComponent} from '../add-contract/add-contract.component';
import {DetailComponent} from '../detail/detail.component';
import {ContractService} from '../../providers/contractService';

@Component({
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  public aContracts : Object[];

  addConractComponent = AddContractComponent;
  detailComponent = DetailComponent;

  constructor (     private nav: NavController,
                    private contractService: ContractService
  ) {
    contractService.initDB();
    this.aContracts = contractService.aContracts;
  }

  goAddPage(){
    this.nav.push(this.addConractComponent);
  }

  openDetail() {
    this.nav.push(DetailComponent)
  }
}
