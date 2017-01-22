import {Component} from '@angular/core';
import {HomeComponent} from '../pages/home/home.component';
import {GraphComponent} from '../pages/graph/graph.component'
import {SettingsComponent} from '../pages/settings/settings.component'
import {AddContractComponent} from '../pages/add-contract/add-contract.component'

import {Observable} from "rxjs/Observable";
import {Store} from '@ngrx/store';
import {AppState} from '../models/appState';

@Component({
  templateUrl: 'app.component.html'
})
export class ContractAppComponent {
  rootPage: any ;
  contractOverview: any;
  graph: any;
  settings: any;
  selectedTab: Observable<String>;
  testobject : any;
  constructor
    (private store: Store<AppState>)
    {
      this.rootPage = HomeComponent
      this.contractOverview = HomeComponent
      this.graph = GraphComponent
      this.settings = SettingsComponent
      this.selectedTab = store.select('selectedTab');
      this.selectedTab.subscribe(
        (v) => {
          console.log(v);
        console.log(this);}
        );
    };
}
