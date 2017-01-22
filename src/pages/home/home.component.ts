import {Component, ViewChild} from '@angular/core';
import {Content, NavController} from 'ionic-angular';
import {AddContractComponent} from '../add-contract/add-contract.component';
import {DetailComponent} from '../detail/detail.component';
import {ContractService} from '../../providers/contractService';

import {Observable} from "rxjs/Observable";
import {Store} from '@ngrx/store';
import {AppState} from '../../models/appState';

@Component({
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  public aContracts : Object[];

  addConractComponent = AddContractComponent;
  detailComponent = DetailComponent;

  selectedTab: Object;

  constructor (     private nav: NavController,
                    private contractService: ContractService,
                    private store: Store<AppState>
  ) {
    contractService.initDB();

    this.aContracts = contractService.aContracts;
    store.select('selectedTab').subscribe(selectedTab => {
      this.selectedTab = selectedTab;
    });
  }

  goAddPage(){
    this.nav.push(this.addConractComponent);
  }

  openDetail() {
    this.nav.push(DetailComponent)
  }
  goContracts(){
    this.store.dispatch({type: 'SELECTED_TAB_CONTRACTS', payload: {}});
  }
  goGraph(){
    this.store.dispatch({type: 'SELECTED_TAB_GRAPH', payload: {}});
  }
  goSettings(){
    this.store.dispatch({type: 'SELECTED_TAB_SETTINGS', payload: {}});
  }
}
